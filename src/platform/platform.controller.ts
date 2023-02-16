import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';

import { PlatformService, VodService } from './platform.service';
import { Platform, Vod } from './entities/platform.entity';
import { CreatePlatformDto } from './dto/platform.dto';
import { CreateVodDto } from './dto/vod.dto';

@Controller('platform')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @Post()
  create(@Body() createPlatformDto: CreatePlatformDto) {
    return this.platformService.create(createPlatformDto);
  }

  @Get()
  findAll() {
    return this.platformService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number): Promise<Platfrom> {
    return this.platformService.findOneById(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.platformService.remove(id);
  }
}

@Controller('vod')
export class VodController {
  constructor(private readonly vodService: VodService) {}

  @Post()
  create(@Body() createVodDto: CreateVodDto) {
    return this.vodService.create(createVodDto);
  }

  @Get()
  findAll() {
    return this.vodService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number): Promise<Vod> {
    return this.vodService.findOneById(id);
  }

  // @Get(':id')
  // findVodByPlatformId(@Param('id', ParseIntPipe) id: number): Promise<Vod> {
  //   return this.vodService.findVodByPlatformId(id);
  // }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vodService.remove(id);
  }
}
