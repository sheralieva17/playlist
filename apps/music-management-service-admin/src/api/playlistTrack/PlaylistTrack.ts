import { Playlist } from "../playlist/Playlist";
import { Track } from "../track/Track";

export type PlaylistTrack = {
  createdAt: Date;
  id: string;
  playlist?: Playlist | null;
  track?: Track | null;
  updatedAt: Date;
};
