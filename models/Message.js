const { User, Match } = require('./index')
const http = require('../http')

class Message {
	constructor(message) {
		this.id = message._id
		this.matchId = message.match_id
		this.sent = message.sent_date ? new Date(message.sent_date) : 'N/A'
		this.content = message.message
		this.receiverId = message.to
		this.senderId = message.from
		this.timestamp = message.timestamp ?? 'N/A'
		this.created = message.created_date ? new Date(message.created_date) : 'N/A'
	}

	async getAuthor() {
		try {
			const res = await http.get(`/user/${this.senderId}`)
			return new User(res.results)
		} catch(e) {
			throw e
		}
	}

	async getMatch() {
		try {
			const res = await http.get(`/v2/matches/${this.matchId}`)
			return new Match(res.results)
		} catch(e) {
			throw e
		}
	}

}

module.exports = Message