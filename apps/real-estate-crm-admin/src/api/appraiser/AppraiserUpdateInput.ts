import { PropertyUpdateManyWithoutAppraisersInput } from "./PropertyUpdateManyWithoutAppraisersInput";

export type AppraiserUpdateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  properties?: PropertyUpdateManyWithoutAppraisersInput;
};
