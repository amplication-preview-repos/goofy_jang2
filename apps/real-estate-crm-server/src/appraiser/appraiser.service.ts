import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppraiserServiceBase } from "./base/appraiser.service.base";

@Injectable()
export class AppraiserService extends AppraiserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
