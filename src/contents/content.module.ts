import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content, Category, Genre } from './entities/content.entity';
import { VOD, Platform } from '../platform/entities/platform.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Content, Category, Genre])], // 현재 스코프에 등록된 레포지토리
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentsModule {}
