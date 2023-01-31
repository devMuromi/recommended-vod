import { IsString } from 'class-validator';
import { Content } from '../entities/content.entity';

export class CreateCategoryDto {
  @IsString()
  readonly name: string;
}
