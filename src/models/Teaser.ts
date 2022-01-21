/**
 * The teaser of an user
 */
export interface TeaserInterface {
  /**
   * The type of an teaser
   */
  type: string;
  /**
   * The value string of an teaser
   */
  string: string;
}

/**
 * Implements some basic methods for interaction
 *
 * @class Teaser
 */
class Teaser {
  private teaserData: TeaserInterface;

  constructor(data: TeaserInterface) {
    this.teaserData = data;
  }
}

export default Teaser;
