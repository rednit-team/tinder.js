const [{ TopArtist, Track }, InstagramInfo] = [
	require('./Spotify'),
	require('./Instagram')
];
const http = require('../http');

class User {

	constructor(user) {
		this.id = user.id;
		this.name = user.name.trim();
		this.birthdate = new Date(user.birth_date);
		this.bio = user.bio.trim();
		this.distance = user.distance_mi;
		this.photos = user.photos.map((photo) => photo.url);
		this.spotifyTopArtists = user.spotify_top_artists?.map((artist) => new TopArtist(artist));
		this.spotifyThemeTrack = user.spotify_theme_track ? new Track(user.spotify_theme_track) : undefined;
		this.instagram = user.instagram ? new InstagramInfo(user.instagram) : undefined;
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
