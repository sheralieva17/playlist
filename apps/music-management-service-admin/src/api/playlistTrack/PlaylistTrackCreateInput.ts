import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type PlaylistTrackCreateInput = {
  playlist?: PlaylistWhereUniqueInput | null;
  track?: TrackWhereUniqueInput | null;
};
