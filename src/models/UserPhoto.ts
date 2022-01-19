import { PhotoInterface } from "./Other";

export type UserPhotoInterface = {
  media_type: string;
} & Pick<
  PhotoInterface,
  'id'
  | 'crop_info'
  | 'url'
  | 'processedFiles'
  | 'fileName'
  | 'extension'
  >;

class UserPhoto {

  private userPhotoData: UserPhotoInterface;

  constructor(data: UserPhotoInterface) {
    this.userPhotoData = data;
  }
}

export default UserPhoto;
