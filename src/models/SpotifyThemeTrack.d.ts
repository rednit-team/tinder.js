/**
 * A spotify artist
 */
import { SizedImage } from './SizedImage';

export interface SpotifyArtistInterface {
  /**
   * The ID of the artist
   */
  id: number;
  /**
   * The name of the artist
   */
  name: string;
}

/**
 * A spotify album
 */
export interface SpotifyAlbumInterface {
  /**
   * The ID of the album
   */
  id: number;
  /**
   * The name of the album
   */
  name: string;
  /**
   * All images of the album
   */
  images: SizedImage[];
}

/**
 * A spotify theme track
 * @interface SpotifyTrackInterface
 * NOTE: This type is the sane as Song-Attachment
 */
export interface SpotifyTrackInterface {
  /**
   * The ID of the theme track
   */
  id: number;
  /**
   * The name of the theme track
   */
  name: string;
  /**
   * The album of the theme track
   */
  album: SpotifyAlbumInterface;
  /**
   * All artists on the theme track
   */
  artists: SpotifyArtistInterface[];
  /**
   * The preview url of the theme track
   */
  preview_url?: string;
  /**
   * The uri of the theme track
   */
  uri: string;
}
