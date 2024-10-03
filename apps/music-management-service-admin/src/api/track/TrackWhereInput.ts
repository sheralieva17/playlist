import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlaylistTrackListRelationFilter } from "../playlistTrack/PlaylistTrackListRelationFilter";

export type TrackWhereInput = {
  album?: StringNullableFilter;
  artist?: StringNullableFilter;
  genre?: StringNullableFilter;
  id?: StringFilter;
  playlistTracks?: PlaylistTrackListRelationFilter;
  title?: StringNullableFilter;
};
