import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { Content } from './entities/content.entity';

class MockContentRepository {
  async findOneBy(param) {
    const content: Content = new Content();
    content.id = param.id;
    return content;
  }

  async find() {
    const content: Content = new Content();
    return [content];
  }
}

describe('ContentsController', () => {
  let contentService: ContentService;
  let contentController: ContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentController],
      providers: [
        ContentService,
        {
          provide: getRepositoryToken(Content),
          useClass: MockContentRepository,
        },
      ],
    }).compile();

    contentService = module.get<ContentService>(ContentService);
    contentController = module.get<ContentController>(ContentController);
  });

  it('should be defined', () => {
    expect(contentController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of contents', async () => {
      const content = new Content();

      jest.spyOn(contentService, 'findAll').mockImplementation(async () => [content]);
      expect(await contentController.findAll()).toEqual([content]);
    });
  });
});
