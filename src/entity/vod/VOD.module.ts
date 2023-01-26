import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { VODProviders } from './VOD.providers';
import { VODService } from './VOD.service';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...VODProviders,
        VODService,
    ],
})
export class platformModule {}