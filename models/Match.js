const User = require('./User');
const http = require('../http');

class Match {

	/**
	 * @typedef match
	 * 
	 * @memberof Match
	 * 
	 * @property {*} ID
	 * @property {Boolean} closed
	 * @property {Number} commonFriendCount
	 * @property {Number} commonLikeCount
	 * @property {Date} created
	 * @property {Boolean} dead
	 * @property {Date} lastActivity - probably deprecated
	 * @property {*} pending
	 * @property {Boolean} isSuperlike
	 * @property {Boolean} isBoostMatch
	 * @property {Boolean} isSuperBoostMatch
	 * @property {Boolean} isExperiencesMatch
	 * @property {Boolean} isFastMatch
	 * @property {Boolean} isOpener
	 * @property {Boolean} userId - User ID of the other person/user
	 * 
	 * @deprecated lastActivity - match.last_activity_date;
	 */


	 /**
	  * @constructor
	  * @param {Object} match - The raw match object we get from tinder
	  */
	constructor(match) {
		this.id = match.id;
		this.closed = match.closed;
		this.commonFriendCount = match.common_friend_count;
		this.commonLikeCount = match.common_like_count;
		this.created = new Date(match.created_date);
		this.dead = match.dead;
		this.lastActivity = new Date(match.last_activity_date);
		this.pending = match.pending;
		this.isSuperlike = match.is_super_like;
		this.isBoostMatch = match.is_boost_match;
		this.isSuperBoostMatch = match.is_super_boost_match;
		this.isExperiencesMatch = match.is_experiences_match;
		this.isFastMatch = match.is_fast_match;
		this.isOpener = match.is_opener;
		this.userId = match.person._id;
	}

	/**
	 * @async
	 * @method getUser
	 * @memberof Match
	 * @returns Userobject
	 */
	async getUser() {
		const res = await http.get(`/user/${this.userId}`);
		return new User(res.results);
	}

	/**
	 * @async
	 * @method sendMessage
	 * @memberof Match
	 * @param {String} content 
	 */
	async sendMessage(content) {
		const Message = require('./Message');
		const res = await http.post(`/user/matches/${this.id}`, { message: content });
		return new Message(res.results);
	}

	/**
	 * @async
	 * @method getMessages
	 * @memberof Match
	 * @param {Number} [count=60] - Number of messages you want to request from the tinder API
	 * @param {*} pageToken - Page token
	 */
	async getMessages(count = 60, pageToken) {
		const Message = require('./Message');
		let res = await http.get(`/v2/matches/${this.id}/messages?count=${count}${pageToken ? `&page_token=${pageToken}` : ''}`);
		const messages = res.data.messages.map((message) => new Message(message));
		if (count > 60) {
			while (messages.count < count) {
				res = await http.get(`/v2/matches/${this.id}/messages?count=${count}&page_token=${res.page_token}`);
				messages.push(res.data.messages.map((message) => new Message(message)));
			}
		}
		return messages.splice(0, count);
	}

	/**
	 * @async
	 * @method unmatch
	 * @memberof Match
	 */
	async unmatch() {
		await http.delete(`/user/matches/${this.id}`);
	}

}

module.exports = Match;
