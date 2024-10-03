import { PlaylistTrackCreateNestedManyWithoutPlaylistsInput } from "./PlaylistTrackCreateNestedManyWithoutPlaylistsInput";

export type PlaylistCreateInput = {
  name?: string | null;
  owner?: string | null;
  playlistTracks?: PlaylistTrackCreateNestedManyWithoutPlaylistsInput;
};
