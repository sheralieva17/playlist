import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlaylistTrackServiceBase } from "./base/playlistTrack.service.base";

@Injectable()
export class PlaylistTrackService extends PlaylistTrackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
