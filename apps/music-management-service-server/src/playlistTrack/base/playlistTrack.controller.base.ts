/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PlaylistTrackService } from "../playlistTrack.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PlaylistTrackCreateInput } from "./PlaylistTrackCreateInput";
import { PlaylistTrack } from "./PlaylistTrack";
import { PlaylistTrackFindManyArgs } from "./PlaylistTrackFindManyArgs";
import { PlaylistTrackWhereUniqueInput } from "./PlaylistTrackWhereUniqueInput";
import { PlaylistTrackUpdateInput } from "./PlaylistTrackUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PlaylistTrackControllerBase {
  constructor(
    protected readonly service: PlaylistTrackService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlaylistTrack })
  @nestAccessControl.UseRoles({
    resource: "PlaylistTrack",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPlaylistTrack(
    @common.Body() data: PlaylistTrackCreateInput
  ): Promise<PlaylistTrack> {
    return await this.service.createPlaylistTrack({
      data: {
        ...data,

        playlist: data.playlist
          ? {
              connect: data.playlist,
            }
          : undefined,

        track: data.track
          ? {
              connect: data.track,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        playlist: {
          select: {
            id: true,
          },
        },

        track: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PlaylistTrack] })
  @ApiNestedQuery(PlaylistTrackFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PlaylistTrack",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async playlistTracks(
    @common.Req() request: Request
  ): Promise<PlaylistTrack[]> {
    const args = plainToClass(PlaylistTrackFindManyArgs, request.query);
    return this.service.playlistTracks({
      ...args,
      select: {
        createdAt: true,
        id: true,

        playlist: {
          select: {
            id: true,
          },
        },

        track: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PlaylistTrack })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlaylistTrack",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async playlistTrack(
    @common.Param() params: PlaylistTrackWhereUniqueInput
  ): Promise<PlaylistTrack | null> {
    const result = await this.service.playlistTrack({
      where: params,
      select: {
        createdAt: true,
        id: true,

        playlist: {
          select: {
            id: true,
          },
        },

        track: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PlaylistTrack })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlaylistTrack",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePlaylistTrack(
    @common.Param() params: PlaylistTrackWhereUniqueInput,
    @common.Body() data: PlaylistTrackUpdateInput
  ): Promise<PlaylistTrack | null> {
    try {
      return await this.service.updatePlaylistTrack({
        where: params,
        data: {
          ...data,

          playlist: data.playlist
            ? {
                connect: data.playlist,
              }
            : undefined,

          track: data.track
            ? {
                connect: data.track,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          playlist: {
            select: {
              id: true,
            },
          },

          track: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PlaylistTrack })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlaylistTrack",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePlaylistTrack(
    @common.Param() params: PlaylistTrackWhereUniqueInput
  ): Promise<PlaylistTrack | null> {
    try {
      return await this.service.deletePlaylistTrack({
        where: params,
        select: {
          createdAt: true,
          id: true,

          playlist: {
            select: {
              id: true,
            },
          },

          track: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
