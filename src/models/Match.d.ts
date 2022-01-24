import { MessageInterface } from './Message';
import { UserInterface } from './User';

/**
 * The data model of a match
 */
export interface MatchInterface {
  /**
   * The ID of a match
   */
  _id: string;
  /**
   * The ID of a match
   */
  id: string;
  /**
   * If a match was closed
   */
  closed: boolean;
  /**
   * The number of common friends
   */
  common_friend_count: number;
  /**
   * The number of common likes
   */
  common_like_count: number;
  /**
   * The date when the match was created
   */
  created_date: Date | string;
  /**
   * If the match is dead
   */
  dead: boolean;
  /**
   * The last activity of the match
   */
  last_activity_date: Date | string;
  /**
   * The number of messages
   */
  message_count: number;
  /**
   * All messages
   */
  messages: MessageInterface[];
  /**
   * All participants of the match
   */
  participants: string[];
  /**
   * If the match is pending
   */
  pending: boolean;
  /**
   * If the match is a super like
   */
  is_super_like: boolean;
  /**
   * The the match is boosted
   */
  is_boost_match: boolean;
  /**
   * If the match is super boosted
   */
  is_super_boost_match: boolean;
  /**
   * If the match is based on experience
   */
  is_experiences_match: boolean;
  /**
   * If the match is a fast match
   */
  is_fast_match: boolean;
  /**
   * If the match is opener
   */
  is_opener: boolean;
  /**
   * The person you matched with
   */
  person: UserInterface;
  /**
   * If you are following for each other
   */
  following: boolean;
  /**
   * The following moments
   */
  following_moments: boolean;
  /**
   * If the message has been seen
   */
  seen?: {
    /**
     * If the match has been seen
     */
    match_seen: boolean;
  };
}
