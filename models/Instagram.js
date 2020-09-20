class InstagramInfo {
	constructor(info) {
		this.lastFetch = new Date(info.last_fetch_time)
		this.completedInitialFetch = info.completed_initial_fetch
		this.mediaCount = info.media_count
		this.photos = info.photos.map(photo => new InstagramPhoto(photo))
	}

}

class InstagramPhoto {
	constructor(photo) {
		this.image = photo.image
		this.thumbnail = photo.thumbnail
		this.ts = photo.ts
	}

}

module.exports = InstagramInfo