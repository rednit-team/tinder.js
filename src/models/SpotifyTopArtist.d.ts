import { SpotifyTrackInterface } from './SpotifyThemeTrack';

/**
 * The top artist of a spotify user
 */
export interface SpotifyTopArtistInterface {
  /**
   * The ID of the top artist
   */
  id: string;
  /**
   * The name of the top artist
   */
  name: string;
  /**
   * If the top artist is selected
   */
  selected: boolean;
  /**
   * The top track of the artist
   */
  top_track: SpotifyTrackInterface;
}
