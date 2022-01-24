import { LikePreviewInterface } from "../models/LikePreview";

/**
 * Implements some basic methods for interaction
 *
 * @class LikePreview
 */
 class LikePreview {
    private likePreviewData: LikePreviewInterface;
  
    constructor(data: LikePreviewInterface) {
      this.likePreviewData = data;
    }
  }
  
  export default LikePreview;