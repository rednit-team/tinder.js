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
