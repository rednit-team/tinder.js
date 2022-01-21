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

/**
 * Implements some basic methods for interaction
 *
 * @class Instagram
 * @implements {ParseableInterface}
 */
class Instagram implements ParseableInterface {
  private instagramData: InstagramInterface;

  constructor(data: InstagramInterface) {
    this.instagramData = data;
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

export default Instagram;
