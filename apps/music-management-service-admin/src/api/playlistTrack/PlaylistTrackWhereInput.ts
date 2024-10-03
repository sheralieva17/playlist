import { StringFilter } from "../../util/StringFilter";
import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type PlaylistTrackWhereInput = {
  id?: StringFilter;
  playlist?: PlaylistWhereUniqueInput;
  track?: TrackWhereUniqueInput;
};
