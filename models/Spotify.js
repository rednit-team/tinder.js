class TopArtist {

	constructor(artist) {
		this.artistId = artist.id;
		this.name = artist.name;
		this.selected = artist.selected;
		this.topTrack = new Track(artist.top_track);
	}

}

class Track {

	constructor(track) {
		this.trackId = track.id;
		this.name = track.name;
		this.album = new Album(track.album);
		this.previewUrl = track.preview_url;
		this.uri = track.uri;
	}

}

class Album {

	constructor(album) {
		this.albumId = album.id;
		this.name = album.name;
		this.images = Object.fromEntries(album.images.map((image) => [image.height, image.url]));
	}

	getImageUrl(resolution = 640) {
		return this.images[resolution];
	}

}

module.exports = { TopArtist, Track };
