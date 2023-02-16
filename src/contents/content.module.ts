import { Module } from '@nestjs/common';
import { CategoryService, ContentService, GenreService } from './content.service';
import { CategoryController, ContentController, GenreController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content, Category, Genre } from './entities/content.entity';
import { VOD, Platform } from '../platform/entities/platform.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Content, Category, Genre])], // 현재 스코프에 등록된 레포지토리
  controllers: [ContentController, CategoryController, GenreController],
  providers: [ContentService, CategoryService, GenreService],
})
export class ContentModule {}
