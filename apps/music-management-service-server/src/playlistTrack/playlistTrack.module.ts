import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlaylistTrackModuleBase } from "./base/playlistTrack.module.base";
import { PlaylistTrackService } from "./playlistTrack.service";
import { PlaylistTrackController } from "./playlistTrack.controller";
import { PlaylistTrackResolver } from "./playlistTrack.resolver";

@Module({
  imports: [PlaylistTrackModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlaylistTrackController],
  providers: [PlaylistTrackService, PlaylistTrackResolver],
  exports: [PlaylistTrackService],
})
export class PlaylistTrackModule {}
