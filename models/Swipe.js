const [FacebookInfo, InstagramInfo, { TopArtist, Track }] = [require('./Facebook'), require('./Instagram'), require('./Spotify')];
const http = require('../http');

class Swipe {
	/**
	 * @typedef {Object} swipe
	 * 
	 * @memberof Swipe
	 * 
	 * @property {*} userId - Tinder User ID of the swipe
	 * @property {String} name - Name or Username of the swipe 
	 * @property {Date} birthdate - Birthdate as Date Object
	 * @property {Number} age
	 * @property {String} bio
	 * @property {Array} badges
	 * @property {Number} distance - Distance in miles
	 * @property {String[]} photos - Array of links to the photo(s)
	 * @property {Number} gender - Gender, 1 = female
	 * @property {Array} jobs 
	 * @property {Array} schools
	 * @property {Boolean} schowGender
	 * @property {Object} facebook
	 * @property {Object} spotify 
	 * @property {Object} instagram
	 * @property {Boolean} traveling - Is true when the other user has the passport feature is and is currently traveling
	 * @property {String} contentHash 
	 * @property {Object} teasers - The little teasers that are shown on the bottom above the photos when your are swiping (on the mobile app)
	 * @property {Object} experimental - Experimental information. Currently theres a property under "experimental.user_interests" that called "selected_interests" that will show you the interests picked by the user.
	 * 
	 * @deprecated isSuperlikeUpsell - swipe.is_superlike_upsell; recentlyActive - swipe.user.recently_active
	 * 
	 */

	/**
	 * @constructor
	 * @param {Object} swipe - The raw swipe object we get from tinder
	 * @description Returns a new Swipe object
	 */
	constructor(swipe) {
		this.userId = swipe.user._id;
		this.name = swipe.user.name;
		this.birthdate = new Date(swipe.user.birth_date);
		this.age = new Date().getFullYear() - this.birthdate.getFullYear();
		this.bio = swipe.user.bio.trim();
		this.badges = swipe.user.badges;
		this.distance = swipe.user.distance_mi;
		this.photos = swipe.user.photos.map((photo) => photo.url);
		this.gender = swipe.user.gender;
		this.jobs = swipe.user.jobs;
		this.schools = swipe.user.schools;
		this.showGender = swipe.user.show_gender_on_profile;
		this.facebook = new FacebookInfo(swipe.facebook);
		if (swipe.spotify) this.spotify = {
			connected: swipe.spotify.spotify_connected,
			spotifyTopArtists: swipe.spotify.spotify_top_artists?.map((artist) => new TopArtist(artist)),
			spotifyThemeTrack: swipe.spotify.spotify_theme_track ? new Track(swipe.spotify.spotify_theme_track) : undefined
		};
		if (swipe.instagram) this.instagram = new InstagramInfo(swipe.instagram);
		if (swipe.is_traveling) this.traveling = swipe.is_traveling
		this.contentHash = swipe.content_hash;
		this.teasers = swipe.teasers;
		if (swipe.experiment_info) this.experimental = swipe.experiment_info;
	}

	/**
	 * @method distanceMi
	 * @memberof Swipe
	 * @description Returns the distance in miles
	 * @returns {Number} - distance
	 */
	get distanceMi() {
		return this.distance;
	}

	/**
	 * @method distanceKm
	 * @memberof Swipe
	 * @description Returns the distance in kilometers
	 * @returns {Number} - distance(in KM)
	 */
	get distanceKm() {
		return this.distance * 1.609344;
	}

	/**
	 * @async
	 * @method like
	 * @memberof Swipe
	 * @description Like the swipe at hand
	 */
	async like() {
		await http.get(`/like/${this.userId}`);
	}

	/**
	 * @async
	 * @method dislike
	 * @memberof Swipe
	 * @description Dislike the swipe at hand
	 */
	async dislike() {
		await http.get(`/pass/${this.userId}`);
	}

	/**
	 * @async
	 * @method superlike
	 * @memberof Swipe
	 * @description Superlike the swipe at hand
	 */
	async superlike() {
		await http.get(`/like/${this.userId}/super`);
	}

}

module.exports = Swipe;