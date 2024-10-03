import { SortOrder } from "../../util/SortOrder";

export type PlaylistTrackOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  playlistId?: SortOrder;
  trackId?: SortOrder;
  updatedAt?: SortOrder;
};
