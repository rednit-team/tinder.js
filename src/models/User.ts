import http from "../http";
import { TopArtist, Track } from "./Spotify";
import InstagramInfo from "./Instagram";

export default class User {
  id: any;
  name: any;
  birthdate: Date;
  age: number;
  bio: any;
  distance: any;
  photos: any;
  spotify:
    | { connected: any; spotifyTopArtists: any; spotifyThemeTrack: any }
    | undefined;
  instagram: any;

  // TODO: implement user into swipe object, so user properties are pulled from
  // this model when constructing a new Swipe Object

  /**
   * @typedef {Object} user
   *
   * @memberof User
   *
   * @property {*} id - User ID
   * @property {String} name - User name
   * @property {Date} birthdate
   * @property {Number} age
   * @property {String} bio
   * @property {Number} distance
   * @property {String[]} photos
   * @property {Object} spotify
   * @property {Object} instagram
   *
   */

  /**
   * @constructor
   * @param {user} user
   * @description Returns a new User Object
   */
  constructor(user: {
    _id: any;
    name: string;
    birth_date: string | number | Date;
    bio: string;
    distance_mi: any;
    photos: any[];
    spotify: {
      spotify_connected: any;
      spotify_top_artists: any[];
      spotify_theme_track: any;
    };
    instagram: any;
  }) {
    this.id = user._id;
    this.name = user.name.trim();
    this.birthdate = new Date(user.birth_date);
    this.age = new Date().getFullYear() - this.birthdate.getFullYear();
    this.bio = user.bio.trim();
    this.distance = user.distance_mi;
    this.photos = user.photos.map((photo) => photo.url);
    if (user.spotify)
      this.spotify = {
        connected: user.spotify.spotify_connected,
        spotifyTopArtists: user.spotify.spotify_top_artists?.map(
          (artist) => new TopArtist(artist)
        ),
        spotifyThemeTrack: user.spotify.spotify_theme_track
          ? new Track(user.spotify.spotify_theme_track)
          : undefined,
      };
    if (user.instagram) this.instagram = new InstagramInfo(user.instagram);
  }

  /**
   * @method distanceMi
   * @memberof User
   * @description Returns the distance in miles
   * @returns {Number} - distance(in KM)
   */
  get distanceMi() {
    return this.distance;
  }

  /**
   * @method distanceKm
   * @memberof User
   * @description Returns the distance in kilometers
   * @returns {Number} - distance
   */
  get distanceKm() {
    return this.distance * 1.609344;
  }

  /**
   * @method like
   * @memberof User
   * @description Like the user at hand
   */
  async like() {
    await http.get(`/like/${this.id}`);
  }

  /**
   * @method dislike
   * @memberof User
   * @description Dislike the User at hand
   */
  async dislike() {
    await http.get(`/pass/${this.id}`);
  }

  /**
   * @method superlike
   * @memberof User
   * @description Superlike the user at hand
   */
  async superlike() {
    await http.get(`/like/${this.id}/super`);
  }
}
