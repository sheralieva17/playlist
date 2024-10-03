import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PlaylistTitle } from "../playlist/PlaylistTitle";
import { TrackTitle } from "../track/TrackTitle";

export const PlaylistTrackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="playlist.id"
          reference="Playlist"
          label="playlist"
        >
          <SelectInput optionText={PlaylistTitle} />
        </ReferenceInput>
        <ReferenceInput source="track.id" reference="Track" label="track">
          <SelectInput optionText={TrackTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
