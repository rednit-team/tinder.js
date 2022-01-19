/**
 * The general type for an processed file.
 *
 * @type ProcessedFileInterface A file that was processed by the server
 */
export interface ProcessedFileInterface {
  /**
   * The height of an image
   */
  height: number;
  /**
   * The width of an image
   */
  width: number;
  /**
   * The url that resolves to an image
   */
  url: string;
  /**
   * The quality of an image
   * @supported Only within a descriptor image
   */
  quality?: string;
}
