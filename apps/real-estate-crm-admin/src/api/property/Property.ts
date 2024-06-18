import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";
import { Appraiser } from "../appraiser/Appraiser";

export type Property = {
  address: string | null;
  agent?: Agent | null;
  appointments?: Array<Appointment>;
  appraiser?: Appraiser | null;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  updatedAt: Date;
};
