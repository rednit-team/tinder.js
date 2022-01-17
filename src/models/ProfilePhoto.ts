import { parse } from 'date-fns';
import { ParseableInterface } from './ModelInterfaces';
import { CropInfo } from './CropInfo';
import { ProcessedFile } from './Files';
import { ValueHash } from './Hashes';
import { DATE_TIME_FORMAT } from '../Constants';

export interface ProfilePhotoData {
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
  created_at: Date | string;
  /**
   * When the profile picture was updated
   */
  updated_at: Date | string;
  /**
   * The crop information of the profile picture
   * @see CropInfo
   */
  crop_info: CropInfo;
  /**
   * The url that resolves to the profile picture
   */
  url: string;
  /**
   * All processed files in the profile picture itself
   * @see ProcessedFile
   */
  processedFiles: ProcessedFile[];
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
  fbId: string;
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
  phash: ValueHash;
  /**
   * The dhash of the profile picture
   * @see ValueHash
   */
  dhash: ValueHash;
}

/**
 * The class that can be used to perform user specific actions
 *
 * @class ProfilePhoto
 */
class ProfilePhoto implements ParseableInterface {
  private profilePhotoData: ProfilePhotoData;

  constructor(data: ProfilePhotoData) {
    this.profilePhotoData = data;
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
