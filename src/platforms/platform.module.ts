import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VOD, Platform } from '../platforms/entities/platform.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Platform, VOD])],
  controllers: [],
  providers: [],
})
export class PlatformModule {}
