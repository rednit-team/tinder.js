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
