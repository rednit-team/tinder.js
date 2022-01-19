import { parse } from 'date-fns';
import { ParseableInterface } from './ModelInterfaces';
import { DATE_TIME_FORMAT } from '../Constants';
import { PhotoInterface } from './Other';

/**
 * The class that can be used to perform user specific actions
 *
 * @class ProfilePhoto
 */
class ProfilePhoto implements ParseableInterface {
  private profilePhotoData: PhotoInterface;

  constructor(data: PhotoInterface) {
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
