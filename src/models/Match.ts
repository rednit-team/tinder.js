import Message, { MessageInterface } from './Message';
import { UserInterface } from './User';
import { ParseableInterface } from './ModelInterfaces';
import { parse } from 'date-fns';
import { DATE_TIME_FORMAT } from '../Constants';

/**
 * The data model of a match
 */
export interface MatchInterface {
  /**
   * The ID of a match
   */
  _id: string;
  /**
   * The ID of a match
   */
  id: string;
  /**
   * If a match was closed
   */
  closed: boolean;
  /**
   * The number of common friends
   */
  common_friend_count: number;
  /**
   * The number of common likes
   */
  common_like_count: number;
  /**
   * The date when the match was created
   */
  created_date: Date | string;
  /**
   * If the match is dead
   */
  dead: boolean;
  /**
   * The last activity of the match
   */
  last_activity_date: Date | string;
  /**
   * The number of messages
   */
  message_count: number;
  /**
   * All messages
   */
  messages: MessageInterface[];
  /**
   * All participants of the match
   */
  participants: string[];
  /**
   * If the match is pending
   */
  pending: boolean;
  /**
   * If the match is a super like
   */
  is_super_like: boolean;
  /**
   * The the match is boosted
   */
  is_boost_match: boolean;
  /**
   * If the match is super boosted
   */
  is_super_boost_match: boolean;
  /**
   * If the match is based on experience
   */
  is_experiences_match: boolean;
  /**
   * If the match is a fast match
   */
  is_fast_match: boolean;
  /**
   * If the match is opener
   */
  is_opener: boolean;
  /**
   * The person you matched with
   */
  person: UserInterface;
  /**
   * If you are following for each other
   */
  following: boolean;
  /**
   * The following moments
   */
  following_moments: boolean;
  /**
   * If the message has been seen
   */
  seen?: {
    /**
     * If the match has been seen
     */
    match_seen: boolean;
  };
}

/**
 * Implements some basic methods for interaction
 *
 * @class Match
 * @implements {ParseableInterface}
 */
class Match implements ParseableInterface {
  private matchData: MatchInterface;

  constructor(data: MatchInterface) {
    this.matchData = data;
  }

  /**
   * Parses the date provided by the API
   *
   * @param datetime The date string or object
   */
  parseDateTime(datetime: Date | string): Date {
    return typeof datetime === 'string'
      ? parse(datetime as string, DATE_TIME_FORMAT, new Date())
      : datetime;
  }

  /**
   * Checks if a match has already been seen
   *
   * @return {*}  {boolean} If the match already has been seen
   * @memberof Match
   */
  public getMatchSeen(): boolean {
    return this.matchData?.seen.match_seen ?? true;
  }

  /**
   * Gets all messages of a match
   *
   * @return {*}  {Message[]} All messages of an match
   * @memberof Match
   */
  public getAllMessages(): Message[] {
    return this.matchData.messages.map((data) => new Message(data));
  }
}

export default Match;
