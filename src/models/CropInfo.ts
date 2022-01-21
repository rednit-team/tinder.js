import { FacialScopeInterface } from "./FacialScope";

/**
 * Displays all faces on a tinder profile picture.
 */
export interface CropInfoFaceInterface {
  /**
   * The information on the face that was provided by the tinder algorithm.
   */
  algo: FacialScopeInterface;
  /**
   * The percentage value of the bounding box.
   */
  bounding_box_percentage: boolean;
}

/**
 * The crop info of an profile picture.
 */
export interface CropInfoInterface {
  /**
   * The face recognition data the user applied himself.
   */
  user: FacialScopeInterface;
  /**
   * The face recognition data that was applied by the user itself
   */
  algo: FacialScopeInterface;
  /**
   * @ignore No description provided
   */
  proceeded_by_bullseye: boolean;
  /**
   * If the user is customized
   */
  user_customized: boolean;
  /**
   * The face recognition data of all faces on the profile picture.
   */
  faces: CropInfoFaceInterface[];
}

class CropInfo {
  private cropInfoData: CropInfoInterface;

  constructor(data: CropInfoInterface) {
    this.cropInfoData = data;
  }
}
