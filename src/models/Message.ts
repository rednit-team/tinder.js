import User from "./User";
import Match from "./Match";
import http from "../http";

export default class Message {
  id: any;
  matchId: any;
  sent: string | Date;
  content: any;
  receiverId: any;
  senderId: any;
  timestamp: any;
  created: string | Date;
  isLiked: boolean;
  constructor(message: {
    _id: any;
    match_id: any;
    sent_date: string | number | Date;
    message: any;
    to: any;
    from: any;
    timestamp: string;
    created_date: string | number | Date;
    is_liked: any;
  }) {
    this.id = message._id;
    this.matchId = message.match_id;
    this.sent = message.sent_date ? new Date(message.sent_date) : "N/A";
    this.content = message.message;
    this.receiverId = message.to;
    this.senderId = message.from;
    this.timestamp = message.timestamp ?? "N/A";
    this.created = message.created_date
      ? new Date(message.created_date)
      : "N/A";
    this.isLiked = !!message.is_liked;
  }

  async getAuthor() {
    const res = await http.get(`/user/${this.senderId}`);
    return new User(res.results);
  }

  async getMatch() {
    const res = await http.get(`/v2/matches/${this.matchId}`);
    return new Match(res.data);
  }

  async like() {
    return await http.post(`/message/${this.id}/like`);
  }

  async dislike() {
    return await http.delete(`/message/${this.id}/like`);
  }
}
