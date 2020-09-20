const http = require('./http');
const { User, Message, Match, Profile } = require('./models');

class Tinder {

	constructor(authToken) {
		http.setToken(authToken);
	}

	async resetUsername() {
		return this.changeUsername();
	}

	async changeUsername(username) {
		if (!username) {
			await http.delete('/profile/username');
		} else {
			await http.put('/profile/username', { username });
		}
	}

	async travelToLocation(lat, lon) {
		await http.post('/passport/user/travel', { lat, lon });
	}

	async changeLocation(lat, lon) {
		await http.post('/user/ping', { lat, lon });
	}

	async changePreferences(ageFilterMin, ageFilterMax, genderFilter, gender, distanceFilter, hideAge, hideDistance, hideAds, blend, discoverableParty) {
		const res = await http.post('/profile',
			Object.fromEntries(Object.entries({ ageFilterMin, ageFilterMax, genderFilter, gender, distanceFilter, hideAge, hideDistance, hideAds, blend, discoverableParty })
				.filter(([, val]) => Number.isInteger(val) || val === false || val === true || ['recency', 'optimal', 'liked'].includes(val))
				.map(([key, val]) => [key.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase(), val])));
		return new Profile(res);
	}

	async getProfile() {
		const res = await http.get('/profile');
		return new Profile(res);
	}

	async getRecommendations() {
		const res = await http.get('/user/recs');
		return res.results.map(rec => new User(rec));
	}

	async getMatches(count = 60, pageToken) {
		let res = await http.get(`/v2/matches?count=${count}&is_tinder_u=false${pageToken ? `&page_token=${pageToken}` : ''}`);
		const matches = res.data.matches.map(match => new Match(match));
		if (matches.count < count && res.page_token) {
			while (matches.count < count) {
				res = await http.get(`/v2/matches?count=${count}&page_token=${res.page_token}`);
				matches.push(res.data.matches.map(match => new Match(match)));
			}
		}
		return matches.splice(0, count);
	}

	async getMatch(id) {
		return !id || id.length === 0 ? {} : new Match(await http.get(`/v2/matches/${id}`).data);
	}

	async getMatchesByName(name) {
		const matches = await this.getMatches();
		return matches.filter(async match => (await match.getUser()).name === name);
	}

	async getUser(id) {
		return !id || id.length === 0 ? {} : new User((await http.get(`/user/${id}`)).results);
	}

	async getMessage(id) {
		return !id || id.length === 0 ? {} : new Message((await http.get(`/message/${id}`)).results);
	}

}

module.exports = Tinder;
