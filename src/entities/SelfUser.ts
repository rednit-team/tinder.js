import { ProfileInterface } from '../models/Profile';
import { UserInterface } from '../models/User';

type SelfUserData = Pick<
  ProfileInterface,
  | 'age_filter_min'
  | 'age_filter_max'
  | 'create_date'
  | 'distance_filter'
  | 'gender_filter'
  | 'email'
  | 'instagram'
  | 'interested_in'
  | 'jobs'
  | 'photo_optimizer_enabled'
  | 'last_online'
  | 'pos'
  | 'pos_info'
  | 'schools'
  | 'show_gender_on_profile'
  | 'can_create_squad'
>;

class SelfUser {
  private data: SelfUserData;

  constructor(data: SelfUserData) {
    this.data = data;
  }
}

export default SelfUser;
