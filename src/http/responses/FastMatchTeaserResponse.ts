import { LikePreviewInterface } from '../../models/LikePreview';

export interface FastMatchTeaserResponse {
  data: {
    results: { user: LikePreviewInterface }[];
  };
}
