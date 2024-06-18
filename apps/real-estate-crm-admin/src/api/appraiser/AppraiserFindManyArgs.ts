import { AppraiserWhereInput } from "./AppraiserWhereInput";
import { AppraiserOrderByInput } from "./AppraiserOrderByInput";

export type AppraiserFindManyArgs = {
  where?: AppraiserWhereInput;
  orderBy?: Array<AppraiserOrderByInput>;
  skip?: number;
  take?: number;
};
