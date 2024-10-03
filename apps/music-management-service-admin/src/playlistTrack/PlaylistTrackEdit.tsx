import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PlaylistTitle } from "../playlist/PlaylistTitle";
import { TrackTitle } from "../track/TrackTitle";

export const PlaylistTrackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
