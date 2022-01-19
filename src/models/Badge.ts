/**
 * The badge of an user
 */
export interface BadgeInterface {
  /**
   * The type of the badge
   */
  type: string;
}

class Badge {
  private badgeData: BadgeInterface;

  constructor(data: BadgeInterface) {
    this.badgeData = data;
  }
}
