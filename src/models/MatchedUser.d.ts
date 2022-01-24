import { UserInterface } from './User';

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
