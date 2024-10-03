import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlaylistTrackListRelationFilter } from "../playlistTrack/PlaylistTrackListRelationFilter";

export type PlaylistWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  playlistTracks?: PlaylistTrackListRelationFilter;
};
