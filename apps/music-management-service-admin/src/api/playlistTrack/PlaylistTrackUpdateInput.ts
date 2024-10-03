import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type PlaylistTrackUpdateInput = {
  playlist?: PlaylistWhereUniqueInput | null;
  track?: TrackWhereUniqueInput | null;
};
