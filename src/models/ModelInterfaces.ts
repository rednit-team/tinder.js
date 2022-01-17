export interface ParseableInterface {
  /**
   * Parses an date string into an date object
   *
   * @param datetime The initial date string
   */
  parseDateTime(datetime: Date|string): Date;
}
