const http = require('./http');
const fs = require('fs');
const { User, Message, Match, Profile, Swipe } = require('./models');

class Tinder {

	constructor(authToken) {
		http.setToken(authToken);
	}

	async getUpdatesSince(date) {
		// eslint-disable-next-line camelcase
		return await http.post('/updates', { last_activity_date: date.toISOString() });
	}

	async getSwipes() {
		const swipes = await http.get('/v2/recs/core');
		console.log(swipes.data.results)
		fs.writeFileSync('./outraw.txt', JSON.stringify(swipes.data.results))
		return swipes.data.results.map(swipe => new Swipe(swipe));
	}

	async getMeta() {
		const meta = await http.get('/v2/meta');
		return meta.data;
	}

	async reportUser(id, cause, explanation) {
		if (id && id.length > 0)
			await http.post(`/report/${id}`, { cause, explanation });
	}

	async resetUsername() {
		return this.changeUsername();
	}

	async changeUsername(username) {
		if (username && username.length > 0)
			await http.put('/profile/username', { username });
		else
			await http.delete('/profile/username');
	}

	async travelToLocation(lat, lon) {
		await http.post('/passport/user/travel', { lat, lon });
	}

	async changeLocation(lat, lon) {
		await http.post('/user/ping', { lat, lon });
	}

	async resetLocation() {
		await http.post('/passport/user/reset');
	}

	async getLikeCount() {
		const res = await http.get('/v2/fast-match/count');
		return res.data.count;
	}

	async changePreferences(ageFilterMin, ageFilterMax, genderFilter, gender, distanceFilter) {
		const res = await http.post('/v2/profile', { user: Object.fromEntries(
			Object.entries({ ageFilterMin, ageFilterMax, genderFilter, gender, distanceFilter })
				.filter(([, val]) => Number.isInteger(val) || val === false || val === true)
				.map(([key, val]) => [key.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase(), val])) });
		return new Profile(res.data.user);
	}

	async getProfile() {
		return new Profile(await http.get('/profile'));
	}

	async getRecommendedUsers() {
		const res = await http.get('/user/recs');
		return res.results.map((rec) => new User(rec));
	}

	async getMatches(count = 60, pageToken) {
		let res = await http.get(`/v2/matches?count=${count}&is_tinder_u=false${pageToken ? `&page_token=${pageToken}` : ''}`);
		const matches = res.data.matches.map((match) => new Match(match));
		if (matches.count < count && res.page_token) {
			while (matches.count < count) {
				res = await http.get(`/v2/matches?count=${count}&page_token=${res.page_token}`);
				matches.push(res.data.matches.map((match) => new Match(match)));
			}
		}
		return matches.splice(0, count);
	}

	async getMatch(id) {
		if (id && id.length > 0)
			return new Match((await http.get(`/v2/matches/${id}`)).data);
		return undefined;
	}

	async getMatchesByName(name) {
		const matches = await this.getMatches();
		const matchesWithName = await Promise.all(matches.map(async (match) => [(await match.getUser()).name, match]));
		return matchesWithName.filter(([username]) => username === name)
			.map(([, match]) => match);
	}

	async getUser(id) {
		if (id && id.length > 0)
			return new User((await http.get(`/user/${id}`)).results);
		return undefined;
	}

	async getMessage(id) {
		if (id && id.length > 0)
			return new Message(await http.get(`/message/${id}`));
		return undefined;
	}

}

module.exports = Tinder;
