import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VOD, Platform } from '../platform/entities/platform.entity';
import { PlatformController } from './platform.controller';
import { PlatformService } from './platform.service';
@Module({
  imports: [TypeOrmModule.forFeature([Platform, VOD])],
  controllers: [PlatformController],
  providers: [PlatformService],
})
export class PlatformModule {}
