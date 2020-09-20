const http = require('./http')
const { User, Message, Match } = require('./models')

class Tinder {
	constructor(authToken){
		http.setToken(authToken)
	}

	async getRecommendations() {
		try {
			const res = await http.get('/user/recs')
			return res.results.map(rec => new User(rec))
		}	catch(e) {
			throw e
		}
	}

	async getMatches(count = 60, pageToken) {
		try {
			const res = await http.get(`/v2/matches?count=${count}${pageToken ? `&page_token=${pageToken}` : ''}`)
			return res.data.matches.map(match => new Match(match))
		} catch(e) {
			throw e
		}
	}

	async getMatch(id) {
		if (!id || id.length === 0) return {}
		try {
			return new Match((await http.get(`/v2/matches/${id}`).data))
		} catch(e) {
			throw e
		}
	}

	async getMatchesByName(username) {
		try {
			const matches = await this.getMatches()
			return matches.filter(async match => (await match.getUser()).name === username) // TODO: add models
		} catch(e) {
			throw e
		}
	}

	async getUser(id) {
		if (!id || id.length === 0) return {}
		try {
			return new User((await http.get(`/user/${id}`)).results)
		} catch(e) {
			throw e
		}
	}

	async getMessage(id) {
		if (!id || id.length === 0) return {}
		try {
			return new Message((await http.get(`/message/${id}`)).results)
		} catch(e) {
			throw e
		}
	}

}

module.exports = Tinder