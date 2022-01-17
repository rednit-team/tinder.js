/**
 * The teaser of an user
 */
import { ProfilePhotoData } from './ProfilePhoto';

export interface Teaser {
  /**
   * The type of an teaser
   */
  type: string;
  /**
   * The value string of an teaser
   */
  string: string;
}

/**
 * The sexual orientation of an user
 */
export interface SexualOrientation {
  /**
   * The ID of the sexual orientation
   */
  id: string;
  /**
   * The name of the sexual orientation
   */
  name: string;
}

/**
 * The badge of an user
 */
export interface Badge {
  /**
   * The type of the badge
   */
  type: string;
}

/**
 * The base model of an photo
 */
export type Photo = Pick<
  ProfilePhotoData,
  'id' | 'crop_info' | 'url' | 'processedFiles' | 'fileName' | 'extension'
> & {
  media_type: string;
};

/**
 * The base model of a choice selection
 */
export interface ChoiceSelection {
  /**
   * The ID of an choice selection
   */
  id: string;
  /**
   * The name of an choice selection
   */
  name: string;
}

/**
 * The city of an user
 */
export interface City {
  /**
   * The name of an city
   */
  name: string;
}

/**
 * A general interest
 */
export interface Interest {
  /**
   * The ID of an interest
   */
  id: string;
  /**
   * The name of an interest
   */
  name: string;
}

/**
 * All interests of an user
 */
export interface UserInterests {
  /**
   * All interests the user has selected
   */
  selected_interests: Interest[];
}
