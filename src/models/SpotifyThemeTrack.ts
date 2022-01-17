import { ProcessedFile } from './Files';

/**
 * A spotify artist
 */
export interface SpotifyArtist {
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
export interface SpotifyAlbum {
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
  images: ProcessedFile[];
}

/**
 * A spotify theme track
 */
export interface SpotifyThemeTrack {
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
  album: SpotifyAlbum;
  /**
   * All artists on the theme track
   */
  artists: SpotifyArtist[];
  /**
   * The preview url of the theme track
   */
  preview_url: string;
  /**
   * The uri of the theme track
   */
  uri: string;
}
