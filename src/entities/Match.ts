import { parse } from "date-fns";
import { DATE_TIME_FORMAT } from "../Constants";
import { MatchInterface } from "../models/Match";
import Message from "../models/Message";
import { ParseableInterface } from "../models/ModelInterfaces";

/**
 * Implements some basic methods for interaction
 *
 * @class Match
 * @implements {ParseableInterface}
 */
 class Match implements ParseableInterface {
    private matchData: MatchInterface;
  
    constructor(data: MatchInterface) {
      this.matchData = data;
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
  
    /**
     * Checks if a match has already been seen
     *
     * @return {*}  {boolean} If the match already has been seen
     * @memberof Match
     */
    public getMatchSeen(): boolean {
      return this.matchData?.seen.match_seen ?? true;
    }
  
    /**
     * Gets all messages of a match
     *
     * @return {*}  {Message[]} All messages of an match
     * @memberof Match
     */
    public getAllMessages(): Message[] {
      return this.matchData.messages.map((data) => new Message(data));
    }
  }
  
  export default Match;