import { CropInfoInterface } from './CropInfo';
import { SizedImage } from './SizedImage';
import { ValueHash } from './Hashes';

export interface PhotoInterface {
  /**
   * The ID of the user
   */
  id: string;
  /**
   * All assets of the profile picture
   */
  assets: any[];
  /**
   * The type of the profile picture
   */
  type: string;
  /**
   * When the profile picture was created
   */
  created_at?: Date | string;
  /**
   * When the profile picture was updated
   */
  updated_at?: Date | string;
  /**
   * The crop information of the profile picture
   * @see CropInfoInterface
   */
  crop_info: CropInfoInterface;
  /**
   * The url that resolves to the profile picture
   */
  url: string;
  /**
   * All processed files in the profile picture itself
   * @see SizedImage
   */
  processedFiles: SizedImage[];
  /**
   * The name of the profile picture file
   */
  fileName: string;
  /**
   * The extension of the profile picture file
   */
  extension: string;
  /**
   * @ignore No description provided
   */
  fbId?: string;
  /**
   * @ignore No description provided
   */
  webp_qf: any[];
  /**
   * The rank of the profile picture
   */
  rank: number;
  /**
   * The score of the profile picture
   */
  score: number;
  /**
   * The win count of the profile picture
   */
  win_count: number;
  /**
   * The phash of the profile picture
   * @see ValueHash
   */
  phash?: ValueHash;
  /**
   * The dhash of the profile picture
   * @see ValueHash
   */
  dhash?: ValueHash;
}

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
