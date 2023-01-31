import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Category, Genre } from '../entities/content.entity';

export class CreateContentDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly imageUrl: string;

  readonly category: Category;
  readonly genre: Genre;
}

export class UpdateContentDto extends PartialType(CreateContentDto) {}
