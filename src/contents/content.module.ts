import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content, Category, Genre } from './entities/content.entity';
<<<<<<< HEAD:src/contents/content.module.ts
import { VOD, Platform } from '../platform/entities/platform.entity';
=======
import { VOD, Platform } from '../platforms/entities/platform.entity';
>>>>>>> 67afdc3c2c7043a29eded708415a783ad8d2583b:src/contents/contents.module.ts

@Module({
  imports: [TypeOrmModule.forFeature([Content, Category, Genre])], // 현재 스코프에 등록된 레포지토리
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentsModule {}
