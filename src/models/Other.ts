import { ProfilePhotoInterface } from './ProfilePhoto';

/**
 * The base model of an photo
 */
export type PhotoInterface = Pick<
  ProfilePhotoInterface,
  'id' | 'crop_info' | 'url' | 'processedFiles' | 'fileName' | 'extension'
> & {
  media_type: string;
};

/**
 * The base model of a choice selection
 */
export interface ChoiceSelectionInterface {
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
export interface CityInterface {
  /**
   * The name of an city
   */
  name: string;
}

/**
 * A general interest
 */
export interface InterestInterface {
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
export interface UserInterestsInterface {
  /**
   * All interests the user has selected
   */
  selected_interests: InterestInterface[];
}
