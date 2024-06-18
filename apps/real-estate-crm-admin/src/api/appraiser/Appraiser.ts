import { Property } from "../property/Property";

export type Appraiser = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  properties?: Array<Property>;
  updatedAt: Date;
};
