import { Module } from "@nestjs/common";
import { AppraiserModuleBase } from "./base/appraiser.module.base";
import { AppraiserService } from "./appraiser.service";
import { AppraiserController } from "./appraiser.controller";
import { AppraiserResolver } from "./appraiser.resolver";

@Module({
  imports: [AppraiserModuleBase],
  controllers: [AppraiserController],
  providers: [AppraiserService, AppraiserResolver],
  exports: [AppraiserService],
})
export class AppraiserModule {}
