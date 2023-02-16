import { Test, TestingModule } from '@nestjs/testing';
import { ContentService } from './content.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Category, Content, Genre } from './entities/content.entity';
import { CreateContentDto } from './dto/content.dto';

class MockRepository {
  async findOneBy(param) {
    const content: Content = new Content();
    content.id = param.id;
    return content;
  }

  async find() {
    const content: Content = new Content();
    return [content];
  }

  async create(contentDto: CreateContentDto) {
    const content: Content = new Content();
    content.title = contentDto.title;
    content.imageUrl = contentDto.imageUrl;
    content.category = new Category();
    content.genre = new Genre();
    return content;
  }

  async save(param) {
    const content: Content = new Content();
    return content;
  }
}

describe('ContentService', () => {
  let contentService: ContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContentService,
        {
          provide: getRepositoryToken(Content),
          useClass: MockRepository,
        },
      ],
    }).compile();

    contentService = module.get<ContentService>(ContentService);
  });

  it('should be defined', () => {
    expect(contentService).toBeDefined();
  });

  it('should return content which has that has same Id as the input', async () => {
    const contentId = 1000;
    const result = await contentService.findOneById(contentId);
    expect(result.id).toBe(contentId);
  });

  it('should return an array of contents', async () => {
    const content = new Content();
    const result = await contentService.findAll();
    expect(result).toEqual([content]);
  });

  it('should create a content, title should matches', async () => {
    const createContentDto: CreateContentDto = {
      title: 'test',
      imageUrl: 'image.chungran.net/1',
      categoryId: 1,
      genreId: 1,
    };
    const result = await contentService.create(createContentDto);
    expect(result.title).toEqual(createContentDto.title);
  });
});
