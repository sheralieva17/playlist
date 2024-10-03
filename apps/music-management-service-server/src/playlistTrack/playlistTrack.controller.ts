import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlaylistTrackService } from "./playlistTrack.service";
import { PlaylistTrackControllerBase } from "./base/playlistTrack.controller.base";

@swagger.ApiTags("playlistTracks")
@common.Controller("playlistTracks")
export class PlaylistTrackController extends PlaylistTrackControllerBase {
  constructor(
    protected readonly service: PlaylistTrackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
