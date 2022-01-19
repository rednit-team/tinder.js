import { UserInterface } from './User';
import { ParseableInterface } from './ModelInterfaces';
import { parse } from 'date-fns';
import { DATE_TIME_FORMAT } from '../Constants';

export type MatchedUserInterface = Pick<
  UserInterface,
  | '_id'
  | 'badges'
  | 'bio'
  | 'birth_date'
  | 'gender'
  | 'name'
  | 'ping_time'
  | 'photos'
  | 'hide_distance'
  | 'hide_age'
>;

class MatchedUser implements ParseableInterface {
  private matchedUserData: MatchedUserInterface;

  constructor(data: MatchedUserInterface) {
    this.matchedUserData = data;
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

export default MatchedUser;
