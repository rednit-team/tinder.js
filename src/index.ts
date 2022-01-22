/// ///////////////////////////////////////////////////
//                  Tinder.js                       //
// This is the entrypoint of the tinder.js api      //
// wrapper. If you have any questions feel free to  //
// open an issue.                                   //
/// ///////////////////////////////////////////////////

import HttpService from './http/HttpService';
import { FastMatchTeaserResponse } from './http/responses/FastMatchTeaserResponse';
import { LoadAllMatchesResponse } from './http/responses/LoadAllMatchesResponse';
import { Recommendations } from './http/responses/Recommendations';
import Update, { UpdateInterface } from './http/responses/Update';
import LikePreview from './models/LikePreview';
import Match from './models/Match';
import User from './models/User';

export interface TinderJsConfig {
  xAuthToken?: string;
  redirectAuth?: boolean;
  disableRateLimit?: boolean;
  loginCredentials?: {
    username: string;
    password: string;
  };
}

const DEFAULT_CONFIG: TinderJsConfig = {
  redirectAuth: true,
  disableRateLimit: false,
};

class TinderJS {
  private HttpClient: HttpService;
  private config: TinderJsConfig;

  constructor(config: TinderJsConfig | undefined = undefined) {
    this.constructClient(config ?? DEFAULT_CONFIG);
  }

  private constructClient(config: TinderJsConfig) {
    this.config = config;
    if (config.redirectAuth) {
      if (navigator === undefined) {
        throw new Error(
          'You cannot use redirect auth in a not web environment',
        );
      }
      throw new Error('This feature is not implemented yet');
    }
    if (config.xAuthToken) {
      this.HttpClient = new HttpService(config.xAuthToken);
      return;
    }
    throw new Error(
      'If you disabled webauth, you have to provide a X-Auth-Token',
    );
  }

  /**
   * Fetches updates from the tinder API
   *
   * @param {(string|undefined)} [lastActivityDate=undefined] The last activity date
   * @return {*}  {Promise<Update>} The update as an async promise
   * @memberof TinderJS
   */
  public async getUpdates(
    lastActivityDate: string | undefined = undefined,
  ): Promise<Update> {
    lastActivityDate = lastActivityDate ?? new Date().toDateString();
    return new Update(
      await this.HttpClient.post<UpdateInterface>('/updates', {
        nudge: true,
        last_activity_date: lastActivityDate,
      }),
    );
  }

  /**
   * Fetches new recommendations from the Tinder API
   *
   * @return {*}  {Promise<User[]>} All recommendations as users
   * @memberof TinderJS
   */
  public async getRecommendations(): Promise<User[]> {
    return (
      await this.HttpClient.get<Recommendations>('/recs/core')
    ).results.map((user) => new User(user));
  }

  /**
   * Fetches all like previews from the Tinder API
   *
   * @return {*}  {Promise<LikePreview[]>} All like previews
   * @memberof TinderJS
   */
  public async getLikePreviews(): Promise<LikePreview[]> {
    return (await this.HttpClient.get<FastMatchTeaserResponse>('/v2/fast-match/teasers'))
      .data.results.map(preview => new LikePreview(preview.user));
  }

  /**
   * Fetches all matches from the Tinder API
   *
   * @param {(string|null)} [pageToken=null] The pageToken of the next page
   * @param {number} [count=60] The count of entries 
   * @return {*}  {Promise<Match[]>} All matches 
   * @memberof TinderJS
   */
  public async loadAllMatches(pageToken: string|null = null, count = 60): Promise<Match[]> {
    let route = `/v2/matches?count=${count}`;
    if (pageToken) {
      route = `${route}&page_token=${pageToken}`;
    }
    const data = (await this.HttpClient.get<LoadAllMatchesResponse>(route)).data;
    const matches: Match[] = data.matches.map(match => new Match(match));
    if (data.next_page_token) {
      matches.concat(await this.loadAllMatches(data.next_page_token));
    }
    return matches;
  }
}

export default TinderJS;
