import { PlaylistTrack } from "../playlistTrack/PlaylistTrack";

export type Track = {
  album: string | null;
  artist: string | null;
  createdAt: Date;
  genre: string | null;
  id: string;
  playlistTracks?: Array<PlaylistTrack>;
  title: string | null;
  updatedAt: Date;
};
