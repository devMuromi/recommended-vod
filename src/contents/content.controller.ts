import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';

import { ContentService, CategoryService, GenreService } from './content.service';
import { Content } from './entities/content.entity';
import { CreateContentDto, UpdateContentDto } from './dto/content.dto';
import { CreateCategoryDto } from './dto/category.dto';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  create(@Body() createContentDto: CreateContentDto) {
<<<<<<< HEAD:src/contents/content.controller.ts
    return this.contentService.create(createContentDto);
=======
    return this.contentsService.create(createContentDto);
>>>>>>> 67afdc3c2c7043a29eded708415a783ad8d2583b:src/contents/contents.controller.ts
  }

  @Get()
  findAll() {
    return this.contentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Content> {
    return this.contentService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return null;
    // return this.contentService.update(+id, updateContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentService.remove(+id);
  }
}

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOneById(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
  //   return this.categoryService.update(+id, updateContentDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

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
    return this.genreService.findOneById(+id);
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
