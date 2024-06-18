import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AppraiserWhereUniqueInput } from "../appraiser/AppraiserWhereUniqueInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  appraiser?: AppraiserWhereUniqueInput | null;
  description?: string | null;
  price?: number | null;
};
