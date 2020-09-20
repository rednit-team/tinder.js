const { User, Message } = require('./index')
const http = require('../http')

class Match {
	constructor(match) {
		this.id = match.id
		this.closed = match.closed
		this.commonFriendCount = match.common_friend_count
		this.commonLikeCount = match.common_like_count
		this.created = new Date(match.created_date)
		this.dead = match.dead
		this.lastActivity = new Date(match.last_activity_date)
		this.pending = match.pending
		this.isSuperlike = match.is_super_like
		this.isBoostMatch = match.is_boost_match
		this.isSuperBoostMatch = match.is_super_boost_match
		this.isExperiencesMatch = match.is_experiences_match
		this.isFastMatch = match.is_fast_match
		this.isOpener = match.is_opener
		this.userId = match.person._id
	}

	async getUser() {
		try {
			const res = await http.get(`/user/${this.id}`)
			return new User(res.results)
		} catch(e) {
			throw e
		}
	}

	async sendMessage(content) {
		try {
			const res = await http.post(`/user/matches/${this.id}`, { message: content })
			return new Message(res.results)
		} catch(e) {
			throw e
		}
	}

	async getMessages(count = 60, pageToken) {
		try {
			const res = await http.get(`/v2/matches/${this.id}/messages?count=${count}${pageToken ? `&page_token=${pageToken}` : ''}`)
			return res.data.messages.map(message => new Message(message))
		} catch(e) {
			throw e
		}
	}

}

module.exports = Match