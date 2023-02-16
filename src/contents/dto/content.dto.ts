import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateContentDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly imageUrl: string;

  @IsOptional()
  @IsNumber()
  readonly categoryId: number;

  @IsOptional()
  @IsNumber()
  readonly genreId: number;
}

export class UpdateContentDto extends PartialType(CreateContentDto) {}
