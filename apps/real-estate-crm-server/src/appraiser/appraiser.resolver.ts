import * as graphql from "@nestjs/graphql";
import { AppraiserResolverBase } from "./base/appraiser.resolver.base";
import { Appraiser } from "./base/Appraiser";
import { AppraiserService } from "./appraiser.service";

@graphql.Resolver(() => Appraiser)
export class AppraiserResolver extends AppraiserResolverBase {
  constructor(protected readonly service: AppraiserService) {
    super(service);
  }
}
