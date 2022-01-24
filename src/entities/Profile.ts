import { parse } from 'date-fns';
import { DATE_TIME_FORMAT } from '../Constants';
import { ParseableInterface } from '../models/ModelInterfaces';
import { ProfileInterface } from '../models/Profile';

/**
 * Implements some basic methods for interaction
 *
 * @class Profile
 * @implements {ParseableInterface}
 */
class Profile implements ParseableInterface {
  private profileData: ProfileInterface;

  constructor(data: ProfileInterface) {
    this.profileData = data;
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

export default Profile;
