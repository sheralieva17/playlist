/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Playlist } from "../../playlist/base/Playlist";
import { Track } from "../../track/base/Track";

@ObjectType()
class PlaylistTrack {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Playlist,
  })
  @ValidateNested()
  @Type(() => Playlist)
  @IsOptional()
  playlist?: Playlist | null;

  @ApiProperty({
    required: false,
    type: () => Track,
  })
  @ValidateNested()
  @Type(() => Track)
  @IsOptional()
  track?: Track | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { PlaylistTrack as PlaylistTrack };
