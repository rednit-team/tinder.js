const [FacebookInfo, InstagramInfo, { TopArtist, Track }] = [require('./Facebook'), require('./Instagram'), require('./Spotify')];

class Swipe {

	constructor(swipe) {
		this.userId = swipe.user._id;
		this.name = swipe.user.name;
		this.birthdate = new Date(swipe.user.birth_date);
		this.age = new Date().getFullYear() - this.birthdate.getFullYear();
		this.bio = swipe.user.bio.trim();
		this.distance = swipe.user.distance_mi;
		this.photos = swipe.user.photos.map((photo) => photo.url);
		this.gender = swipe.user.gender;
		this.jobs = swipe.user.jobs;
		this.schools = swipe.user.schools;
		this.showGender = swipe.user.show_gender_on_profile;
		this.recentlyActive = swipe.user.recently_active;
		this.facebook = new FacebookInfo(swipe.facebook);
		if (swipe.spotify) this.spotify =  {
			connected: swipe.spotify_connected,
			spotifyTopArtists: swipe.spotify_top_artists.map((artist) => new TopArtist(artist)),
			spotifyThemeTrack: swipe.spotify_theme_track ? new Track(swipe.spotify_theme_track) : null,
		}
		if (swipe.instagram) this.instagram = new InstagramInfo(swipe.instagram)
		this.distance = swipe.distance_mi;
		this.contentHash = swipe.content_hash;
		this.isSuperlikeUpsell = swipe.is_superlike_upsell;
		this.teasers = swipe.teasers;
	}

	get distanceMi() {
		return this.distance;
	}

	get distanceKm() {
		return this.distance * 1.609344;
	}

	async like() {
		await http.get(`/like/${this.userId}`);
	}

	async dislike() {
		await http.get(`/pass/${this.userId}`);
	}

	async superlike() {
		await http.get(`/like/${this.userId}/super`);
	}

}

module.exports = Swipe;
