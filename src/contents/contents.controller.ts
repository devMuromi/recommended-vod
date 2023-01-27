import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ContentsService,
  CategoriesService,
  GenresService,
} from './contents.service';
import { CreateContentDto, UpdateContentDto } from './dto/content.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Post()
  create(@Body() createContentDto: CreateContentDto) {
    console.log('createContentDto: ', createContentDto);
    return this.contentsService.create(createContentDto);
  }

  @Get()
  findAll() {
    return this.contentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.contentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return this.contentsService.update(+id, updateContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentsService.remove(+id);
  }
}

@Controller('category')
export class CategoryController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
  //   return this.categoriesService.update(+id, updateContentDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenresService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.genreService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.genreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genreService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
  //   return this.genreService.update(+id, updateContentDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genreService.remove(+id);
  }
}
