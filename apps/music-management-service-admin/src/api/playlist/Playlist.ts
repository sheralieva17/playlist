import { PlaylistTrack } from "../playlistTrack/PlaylistTrack";

export type Playlist = {
  createdAt: Date;
  id: string;
  name: string | null;
  owner: string | null;
  playlistTracks?: Array<PlaylistTrack>;
  updatedAt: Date;
};
