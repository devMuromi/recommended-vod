import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { ContentProviders } from './content.providers';
import { ContentService } from './content.service';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...ContentProviders,
        ContentService,
    ],
})
export class ContentModule {}