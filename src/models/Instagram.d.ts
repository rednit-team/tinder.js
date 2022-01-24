/**
 * The type of an instagram photo
 */
import { ParseableInterface } from './ModelInterfaces';
import { parse } from 'date-fns';
import { DATE_TIME_FORMAT } from '../Constants';

export type InstagramPhotoType = {
  /**
   * The image
   */
  image: string;
  /**
   * The thumbnail of the photo
   */
  thumbnail: string;
  /**
   * The TS value
   */
  ts: string;
};

/**
 * The base interface for an instagram profile
 */
export interface InstagramInterface {
  /**
   * The date of the last data fetch
   */
  last_fetch_time: Date | string;
  /**
   * If the initial fetch has been completed
   */
  completed_initial_fetch: boolean;
  /**
   * All instagram photos of the user
   */
  photos: InstagramPhotoType[];
  /**
   * The number of media posts
   */
  media_count: number;
  /**
   * The instagram name of the user
   */
  username: string;
}
