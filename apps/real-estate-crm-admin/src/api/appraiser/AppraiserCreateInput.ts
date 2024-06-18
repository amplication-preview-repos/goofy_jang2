import { PropertyCreateNestedManyWithoutAppraisersInput } from "./PropertyCreateNestedManyWithoutAppraisersInput";

export type AppraiserCreateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  properties?: PropertyCreateNestedManyWithoutAppraisersInput;
};
