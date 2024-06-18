import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AGENT_TITLE_FIELD } from "../agent/AgentTitle";
import { APPRAISER_TITLE_FIELD } from "../appraiser/AppraiserTitle";

export const PropertyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Properties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="address" source="address" />
        <ReferenceField label="agent" source="agent.id" reference="Agent">
          <TextField source={AGENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="appraiser"
          source="appraiser.id"
          reference="Appraiser"
        >
          <TextField source={APPRAISER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
