import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PlaylistTrackTitle } from "../playlistTrack/PlaylistTrackTitle";

export const TrackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="album" source="album" />
        <TextInput label="artist" source="artist" />
        <TextInput label="genre" source="genre" />
        <ReferenceArrayInput source="playlistTracks" reference="PlaylistTrack">
          <SelectArrayInput
            optionText={PlaylistTrackTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
