import { UserPhotoInterface } from './UserPhoto';

/**
 * @interface LikePreviewInterface
 */
export interface LikePreviewInterface {
  /**
   * The user
   */
  user: {
    /**
     * The ID of the like preview
     */
    _id: string;
    /**
     * All photos of the like preview
     */
    photos: UserPhotoInterface[];
    /**
     * If the liked user was recently active
     */
    recently_active: boolean;
  };
}
