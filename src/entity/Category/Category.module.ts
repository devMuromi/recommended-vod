import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CategoryProviders } from './Category.providers';
import { CategoryService } from './Category.service';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...CategoryProviders,
        CategoryService,
    ],
})
export class CategoryModule {}