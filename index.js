const http = require('./http');
const { User, Message, Match } = require('./models');

class Tinder {

	constructor(authToken) {
		http.setToken(authToken);
	}

	async getRecommendations() {
		const res = await http.get('/user/recs');
		return res.results.map(rec => new User(rec));
	}

	async getMatches(count = 60, pageToken) {
		const res = await http.get(`/v2/matches?count=${count}${pageToken ? `&page_token=${pageToken}` : ''}`);
		return res.data.matches.map(match => new Match(match));
	}

	async getMatch(id) {
		return !id || id.length === 0 ? {} : new Match(await http.get(`/v2/matches/${id}`).data);
	}

	async getMatchesByName(username) {
		const matches = await this.getMatches();
		return matches.filter(async match => (await match.getUser()).name === username);
	}

	async getUser(id) {
		return !id || id.length === 0 ? {} : new User((await http.get(`/user/${id}`)).results);
	}

	async getMessage(id) {
		return !id || id.length === 0 ? {} : new Message((await http.get(`/message/${id}`)).results);
	}

}

module.exports = Tinder;
