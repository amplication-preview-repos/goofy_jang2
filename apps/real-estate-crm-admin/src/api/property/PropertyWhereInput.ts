import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { AppraiserWhereUniqueInput } from "../appraiser/AppraiserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  agent?: AgentWhereUniqueInput;
  appointments?: AppointmentListRelationFilter;
  appraiser?: AppraiserWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
};
