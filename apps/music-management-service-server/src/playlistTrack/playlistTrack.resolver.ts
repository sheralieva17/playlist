import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlaylistTrackResolverBase } from "./base/playlistTrack.resolver.base";
import { PlaylistTrack } from "./base/PlaylistTrack";
import { PlaylistTrackService } from "./playlistTrack.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlaylistTrack)
export class PlaylistTrackResolver extends PlaylistTrackResolverBase {
  constructor(
    protected readonly service: PlaylistTrackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
