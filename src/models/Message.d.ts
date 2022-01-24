import { ContactCardInterface } from './ContactCard';

/**
 * The base interface of a tinder message
 */
export interface MessageInterface {
  /**
   * The ID of message
   */
  _id?: string;
  /**
   * The ID of the match
   */
  match_id?: string;
  /**
   * The date when the message was sent
   */
  sent_date?: Date | string;
  /**
   * The content of the message
   */
  message?: string;
  /**
   * The receiver of the message
   */
  to?: string;
  /**
   * The sender of the message
   */
  from?: string;
  /**
   * The date when the message was created
   */
  created_date?: Date | string;
  /**
   * The timestamp of the message
   */
  timestamp?: number;
  /**
   * The fixed height of the message
   */
  fixed_height?: string;
  /**
   * The type of the message
   */
  type?: string;
  /**
   * The contact card of the user
   */
  contact_card?: ContactCardInterface;
}
