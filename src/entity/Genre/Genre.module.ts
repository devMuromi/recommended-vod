import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { GenreProviders } from './Genre.providers';
import { GenreService } from './Genre.service';

@Module({
  imports: [DatabaseModule],
  providers: [...GenreProviders, GenreService],
})
export class GenreModule {}
