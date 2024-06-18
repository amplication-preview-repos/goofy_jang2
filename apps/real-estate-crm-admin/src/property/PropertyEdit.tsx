import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { AgentTitle } from "../agent/AgentTitle";
import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { AppraiserTitle } from "../appraiser/AppraiserTitle";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <ReferenceInput source="agent.id" reference="Agent" label="agent">
          <SelectInput optionText={AgentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="appraiser.id"
          reference="Appraiser"
          label="appraiser"
        >
          <SelectInput optionText={AppraiserTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
