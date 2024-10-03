import { PlaylistTrackUpdateManyWithoutPlaylistsInput } from "./PlaylistTrackUpdateManyWithoutPlaylistsInput";

export type PlaylistUpdateInput = {
  name?: string | null;
  owner?: string | null;
  playlistTracks?: PlaylistTrackUpdateManyWithoutPlaylistsInput;
};
