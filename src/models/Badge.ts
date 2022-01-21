/**
 * The badge of an user
 */
export interface BadgeInterface {
  /**
   * The type of the badge
   */
  type: string;
}

/**
 * Implements some basic methods for interaction
 *
 * @class Badge
 */
class Badge {
  private badgeData: BadgeInterface;

  constructor(data: BadgeInterface) {
    this.badgeData = data;
  }
}

export default Badge;