import { ContactCardInterface } from './ContactCard';
import { ParseableInterface } from './ModelInterfaces';
import { parse } from 'date-fns';
import { DATE_TIME_FORMAT } from '../Constants';

/**
 * The base interface of a tinder message
 */
export interface MessageInterface {
  /**
   * The ID of message
   */
  _id: string;
  /**
   * The ID of the match
   */
  match_id: string;
  /**
   * The date when the message was sent
   */
  sent_date: Date | string;
  /**
   * The content of the message
   */
  message: string;
  /**
   * The receiver of the message
   */
  to: string;
  /**
   * The sender of the message
   */
  from: string;
  /**
   * The date when the message was created
   */
  created_date: Date | string;
  /**
   * The timestamp of the message
   */
  timestamp: number;
  /**
   * The fixed height of the message
   */
  fixed_height: string;
  /**
   * The type of the message
   */
  type: string;
  /**
   * The contact card of the user
   */
  contact_card: ContactCardInterface;
}

/**
 * Implements some basic methods for interaction
 *
 * @class Message
 * @implements {ParseableInterface}
 */
class Message implements ParseableInterface {
  private messageData: MessageInterface;

  constructor(data: MessageInterface) {
    this.messageData = data;
  }

  /**
   * Parses the date provided by the API
   *
   * @param datetime The date string or object
   */
  parseDateTime(datetime: Date | string): Date {
    return typeof datetime === 'string'
      ? parse(datetime as string, DATE_TIME_FORMAT, new Date())
      : datetime;
  }
}

export default Message;
