import { PlaylistTrack as TPlaylistTrack } from "../api/playlistTrack/PlaylistTrack";

export const PLAYLISTTRACK_TITLE_FIELD = "id";

export const PlaylistTrackTitle = (record: TPlaylistTrack): string => {
  return record.id?.toString() || String(record.id);
};
