import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateContentDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly imageUrl: string;

  readonly category: string;
  readonly genre: string;
}

export class UpdateContentDto extends PartialType(CreateContentDto) {}
