import { parse } from 'date-fns';
import { ParseableInterface } from './ModelInterfaces';
import { DATE_TIME_FORMAT } from '../Constants';
import { SpotifyTrackInterface } from './SpotifyThemeTrack';
import { JobInterface } from './Job';
import { SchoolInterface } from './School';
import { CityInterface, UserInterestsInterface } from './Other';
import { DescriptorInterface } from './Descriptor';
import { BadgeInterface } from './Badge';
import { TeaserInterface } from './Teaser';
import { SexualOrientationInterface } from './SexualOrientation';
import { UserPhotoInterface } from './UserPhoto';
import { ValueHash } from './Hashes';

export interface UserInterface {
  /**
   * All friends of an user
   */
  common_friends?: any[];
  /**
   * The number of all friends of an user
   */
  common_friend_count?: number;
  /**
   * The top artists on spotify of an user
   */
  spotify_top_artists?: any[];
  /**
   * The spotify theme track of an user
   */
  spotify_theme_track?: SpotifyTrackInterface;
  /**
   * The distance to this user
   */
  distance_mi?: number;
  /**
   * The connection count of the user
   */
  connection_count?: number;
  /**
   * All common connections of an user
   */
  common_connections?: any[];
  /**
   * The bio of an user
   */
  bio?: string;
  /**
   * The birth date of an user
   */
  birth_date?: Date | string;
  /**
   * The name of an user
   */
  name?: string;
  /**
   * The Job of an user
   */
  jobs?: JobInterface[];
  /**
   * All schools of an user
   */
  schools?: SchoolInterface[];
  /**
   * All teasers of an user
   */
  teasers?: TeaserInterface[];
  /**
   * The gender of an user
   */
  gender?: number;
  /**
   * If the gender of an user should be displayed in the profile
   */
  show_gender_on_profile?: boolean;
  /**
   * All sexual orientations of an user
   */
  sexual_orientations?: SexualOrientationInterface[];
  /**
   * Some information about the birth-date of the user
   */
  birth_date_info?: string;
  /**
   * The ping time of the user
   */
  ping_time?: string;
  /**
   * All badges of the user
   */
  badges?: BadgeInterface[];
  /**
   * All photos of the user
   */
  photos?: UserPhotoInterface[];
  /**
   * All common likes of the user
   */
  common_likes?: any[];
  /**
   * The number of all common likes of an user
   */
  common_like_count?: number;
  /**
   * All common interests with an user
   */
  common_interests?: any[];
  /**
   * All selected descriptors of an user
   */
  selected_descriptors?: DescriptorInterface[];
  /**
   * The s number of an user
   */
  s_number?: number;
  /**
   * The ID of the user
   */
  _id?: string;
  /**
   * If the user owns tinder U
   */
  is_tinder_u?: boolean;
  /**
   * The city the user lives in
   */
  city?: CityInterface;
  /**
   * All interests of an user
   */
  user_interests?: UserInterestsInterface;
  /**
   * Hides the distance of the user
   */
  hide_distance?: boolean;
  /**
   * Hides the age of a profile
   */
  hide_age?: boolean;
  /**
   * If the users group matched
   */
  group_matched?: boolean;
  /**
   * The hash of the user content
   */
  content_hash?: ValueHash;
  /**
   * If the user has been super-liked
   */
  has_been_superliked?: boolean;
  /**
   * The date of the expiration
   */
  expire_date?: string;
}
