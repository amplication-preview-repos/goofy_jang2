import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppraiserService } from "./appraiser.service";
import { AppraiserControllerBase } from "./base/appraiser.controller.base";

@swagger.ApiTags("appraisers")
@common.Controller("appraisers")
export class AppraiserController extends AppraiserControllerBase {
  constructor(protected readonly service: AppraiserService) {
    super(service);
  }
}
