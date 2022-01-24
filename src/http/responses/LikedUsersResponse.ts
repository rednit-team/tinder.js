import { UserInterface } from '../../models/User';

export interface LikedUsersResponse {
  data: {
    results: UserInterface[];
  };
}
