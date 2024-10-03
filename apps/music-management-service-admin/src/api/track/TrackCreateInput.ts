import { PlaylistTrackCreateNestedManyWithoutTracksInput } from "./PlaylistTrackCreateNestedManyWithoutTracksInput";

export type TrackCreateInput = {
  album?: string | null;
  artist?: string | null;
  genre?: string | null;
  playlistTracks?: PlaylistTrackCreateNestedManyWithoutTracksInput;
  title?: string | null;
};
