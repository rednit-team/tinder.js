const [User, Match] = [require('./User'), require('./Match')];
const http = require('../http');
class Message {

	constructor(message) {
		this.id = message._id;
		this.matchId = message.match_id;
		this.sent = message.sent_date ? new Date(message.sent_date) : 'N/A';
		this.content = message.message;
		this.receiverId = message.to;
		this.senderId = message.from;
		this.timestamp = message.timestamp ?? 'N/A';
		this.created = message.created_date ? new Date(message.created_date) : 'N/A';
		this.is_liked = !!message.is_liked;
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

module.exports = Message;
