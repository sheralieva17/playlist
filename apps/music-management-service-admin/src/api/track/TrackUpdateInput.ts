import { PlaylistTrackUpdateManyWithoutTracksInput } from "./PlaylistTrackUpdateManyWithoutTracksInput";

export type TrackUpdateInput = {
  album?: string | null;
  artist?: string | null;
  genre?: string | null;
  playlistTracks?: PlaylistTrackUpdateManyWithoutTracksInput;
  title?: string | null;
};
