/**
 * The base model of an descriptor
 */
import { SizedImage } from './SizedImage';
import { ChoiceSelectionInterface } from './Other';

export interface DescriptorInterface {
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
  icon_urls: SizedImage[];
  /**
   * The choice selections of a descriptor.
   */
  choice_selections: ChoiceSelectionInterface[];
}

/**
 * Implements some basic methods for interaction
 *
 * @class Descriptor
 */
class Descriptor {
  private descriptorData: DescriptorInterface;

  constructor(data: DescriptorInterface) {
    this.descriptorData = data;
  }
}

export default Descriptor;