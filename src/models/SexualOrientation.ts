/**
 * The sexual orientation of an user
 */
export interface SexualOrientationInterface {
  /**
   * The ID of the sexual orientation
   */
  id: string;
  /**
   * The name of the sexual orientation
   */
  name: string;
}

class SexualOrientation {

  private sexualOrientationData: SexualOrientationInterface;

  constructor(data: SexualOrientationInterface) {
    this.sexualOrientationData = data;
  }
}
