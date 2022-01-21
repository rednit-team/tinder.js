import { PhotoInterface } from './Other';

/**
 * Implements some basic methods for interaction
 *
 * @class MatchPhoto
 */
class MatchPhoto {
  private matchPhoto: PhotoInterface;

  constructor(data: PhotoInterface) {
    this.matchPhoto = data;
  }
}

export default MatchPhoto;
