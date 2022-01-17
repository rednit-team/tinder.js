import { ProcessedFile } from './Files';
import { ChoiceSelection } from './Other';

/**
 * The base model of an descriptor
 */
export interface Descriptor {
  /**
   * The ID of an descriptor
   */
  id: string;
  /**
   * The name of an descriptor
   */
  name: string;
  /**
   * The prompt of an descriptor
   */
  prompt: string;
  /**
   * The type of an descriptor
   */
  type: string;
  /**
   * The icon url of an descriptor
   */
  icon_url: string;
  /**
   * The icon urls of an descriptor
   */
  icon_urls: ProcessedFile[];
  /**
   * The choice selections of a descriptor.
   */
  choice_selections: ChoiceSelection[];
}
