import { Appraiser as TAppraiser } from "../api/appraiser/Appraiser";

export const APPRAISER_TITLE_FIELD = "name";

export const AppraiserTitle = (record: TAppraiser): string => {
  return record.name?.toString() || String(record.id);
};
