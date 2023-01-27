import { Module } from '@nestjs/common';
import { ContentService } from './contents.service';
import { ContentsController } from './contents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content, Category, Genre } from './entities/content.entity';
import { VOD, Platform } from '../platforms/entities/platform.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Content, Category, Genre])],
  controllers: [ContentsController],
  providers: [ContentService],
})
export class ContentsModule {}
