/**
 * Is being used to display data on face recognition.
 */
export interface FacialScopeInterface {
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
 * Implements some basic methods for interaction
 *
 * @class FacialScope
 */
class FacialScope {
  private facialData: FacialScopeInterface;

  constructor(data: FacialScopeInterface) {
    this.facialData = data;
  }
}

export default FacialScope;
