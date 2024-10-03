import { PlaylistTrackWhereInput } from "./PlaylistTrackWhereInput";
import { PlaylistTrackOrderByInput } from "./PlaylistTrackOrderByInput";

export type PlaylistTrackFindManyArgs = {
  where?: PlaylistTrackWhereInput;
  orderBy?: Array<PlaylistTrackOrderByInput>;
  skip?: number;
  take?: number;
};
