import Match, { MatchInterface } from '../../models/Match';
import Message from '../../models/Message';

/**
 * The response of the /update endpoint
 */
export interface UpdateInterface {
  matches: MatchInterface[];
}

/**
 * The response of the update endpoint
 *
 * @class Update
 */
class Update {
  /**
   * All new messages
   */
  public new_messages: Message[];
  /**
   * All new matches
   */
  public new_matches: Match[];

  constructor(update: UpdateInterface) {
    const newMatches = [];
    const newMessages = [];
    for (const match of update.matches) {
      if (match?.seen.match_seen) {
        for (const message of match.messages) {
          newMessages.push(message);
        }
      } else {
        newMatches.push(match);
      }
    }
    this.new_messages = newMessages.map((data) => new Message(data));
    this.new_matches = newMatches.map((data) => new Match(data));
  }
}

export default Update;
