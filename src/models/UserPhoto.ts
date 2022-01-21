import { PhotoInterface } from './Other';

export type UserPhotoInterface = {
  /**
   * The media-type of a picture
   */
  media_type: string;
} & Pick<
  PhotoInterface,
  'id' | 'crop_info' | 'url' | 'processedFiles' | 'fileName' | 'extension'
>;

/**
 * The UserPhoto class that implements some functions to
 * interact with.
 * @see UserPhotoInterface
 */
class UserPhoto {
  private userPhotoData: UserPhotoInterface;

  constructor(data: UserPhotoInterface) {
    this.userPhotoData = data;
  }
}

export default UserPhoto;
