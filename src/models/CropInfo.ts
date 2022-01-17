/**
 * Is being used to display data on face recognition.
 *
 * @type FaceRecognitionData Used on different types to display data on face recognition
 */
export type FaceRecognitionData = {
  /**
   * The width of the profile picture
   */
  width_pct: number;
  /**
   * The x offset of the picture
   */
  x_offset_pct: number;
  /**
   * The height of the profile picture
   */
  height_pct: number;
  /**
   * The y offset of the picture
   */
  y_offset_pct: number;
}

/**
 * Displays all faces on a tinder profile picture.
 *
 * @type CropInfoFace Subtype if the type CropInfo
 */
export type CropInfoFace = {
  /**
   * The information on the face that was provided by the tinder algorithm.
   */
  algo: FaceRecognitionData;
  /**
   * The percentage value of the bounding box.
   */
  bounding_box_percentage: boolean;
}

/**
 * The crop info of an profile picture.
 *
 * @type CropInfo The crop information of an users profile picture
 */
export type CropInfo = {
  /**
   * The face recognition data the user applied himself.
   */
  user: FaceRecognitionData;
  /**
   * The face recognition data that was applied by the user itself
   */
  algo: FaceRecognitionData;
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
  faces: CropInfoFace[];
}
