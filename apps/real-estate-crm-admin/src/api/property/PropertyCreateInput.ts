import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { AppraiserWhereUniqueInput } from "../appraiser/AppraiserWhereUniqueInput";

export type PropertyCreateInput = {
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  appraiser?: AppraiserWhereUniqueInput | null;
  description?: string | null;
  price?: number | null;
};
