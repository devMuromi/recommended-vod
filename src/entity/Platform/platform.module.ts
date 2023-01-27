import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { platformProviders } from './Platform.providers';
import { platformService } from './platform.service';

@Module({
  imports: [DatabaseModule],
  providers: [...platformProviders, platformService],
})
export class platformModule {}
