import { parse } from 'date-fns';
import { SpotifyThemeTrack } from './SpotifyThemeTrack';
import { Job } from './Job';
import { School } from './School';
import {
  Badge,
  City,
  Photo,
  SexualOrientation,
  Teaser,
  UserInterests,
} from './Other';
import { Descriptor } from './Descriptor';
import { ParseableInterface } from './ModelInterfaces';
import { DATE_TIME_FORMAT } from '../Constants';

export interface UserData {
  /**
   * All friends of an user
   */
  common_friends: any[];
  /**
   * The number of all friends of an user
   */
  common_friend_count: number;
  /**
   * The top artists on spotify of an user
   */
  spotify_top_artists: any[];
  /**
   * The spotify theme track of an user
   */
  spotify_theme_track: SpotifyThemeTrack;
  /**
   * The distance to this user
   */
  distance_mi: number;
  /**
   * The connection count of the user
   */
  connection_count: number;
  /**
   * All common connections of an user
   */
  common_connections: any[];
  /**
   * The bio of an user
   */
  bio: string;
  /**
   * The birth date of an user
   */
  birth_date: Date | string;
  /**
   * The name of an user
   */
  name: string;
  /**
   * The Job of an user
   */
  jobs: Job[];
  /**
   * All schools of an user
   */
  schools: School[];
  /**
   * All teasers of an user
   */
  teasers: Teaser[];
  /**
   * The gender of an user
   */
  gender: number;
  /**
   * If the gender of an user should be displayed in the profile
   */
  show_gender_on_profile: boolean;
  /**
   * All sexual orientations of an user
   */
  sexual_orientations: SexualOrientation[];
  /**
   * Some information about the birth-date of the user
   */
  birth_date_info: string;
  /**
   * The ping time of the user
   */
  ping_time: string;
  /**
   * All badges of the user
   */
  badges: Badge[];
  /**
   * All photos of the user
   */
  photos: Photo[];
  /**
   * All common likes of the user
   */
  common_likes: any[];
  /**
   * The number of all common likes of an user
   */
  common_like_count: number;
  /**
   * All common interests with an user
   */
  common_interests: any[];
  /**
   * All selected descriptors of an user
   */
  selected_descriptors: Descriptor[];
  /**
   * The s number of an user
   */
  s_number: number;
  /**
   * The ID of the user
   */
  _id: string;
  /**
   * If the user owns tinder U
   */
  is_tinder_u: boolean;
  /**
   * The city the user lives in
   */
  city: City;
  /**
   * All interests of an user
   */
  user_interests: UserInterests;
}

class User implements ParseableInterface {
  private userData: UserData;

  constructor(data: UserData) {
    this.userData = data;
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
}

export default User;
