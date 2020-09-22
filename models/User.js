const [{ TopArtist, Track }, InstagramInfo] = [require('./Spotify'), require('./Instagram')];
const http = require('../http');

class User {

	constructor(user) {
		this.id = user._id;
		this.name = user.name.trim();
		this.birthdate = new Date(user.birth_date);
		this.age = new Date().getFullYear() - this.birthdate.getFullYear();
		this.bio = user.bio.trim();
		this.distance = user.distance_mi;
		this.photos = user.photos.map((photo) => photo.url);
		if (user.spotify_top_artists) this.spotifyTopArtists = user.spotify_top_artists.map((artist) => new TopArtist(artist));
		if (user.spotify_theme_track) this.spotifyThemeTrack = new Track(user.spotify_theme_track);
		if (user.instagram) this.instagram = new InstagramInfo(user.instagram);
	}

	get distanceMi() {
		return this.distance;
	}

	get distanceKm() {
		return this.distance * 1.609344;
	}

	async like() {
		await http.get(`/like/${this.id}`);
	}

	async dislike() {
		await http.get(`/pass/${this.id}`);
	}

	async superlike() {
		await http.get(`/like/${this.id}/super`);
	}

}

module.exports = User;
