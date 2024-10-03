import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PLAYLIST_TITLE_FIELD } from "../playlist/PlaylistTitle";
import { TRACK_TITLE_FIELD } from "./TrackTitle";

export const TrackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="album" source="album" />
        <TextField label="artist" source="artist" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="genre" source="genre" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PlaylistTrack"
          target="trackId"
          label="PlaylistTracks"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="playlist"
              source="playlist.id"
              reference="Playlist"
            >
              <TextField source={PLAYLIST_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="track" source="track.id" reference="Track">
              <TextField source={TRACK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
