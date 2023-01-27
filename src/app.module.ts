import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsModule } from './contents/contents.module';
import { PlatformModule } from './platforms/platform.module';
import { ParserModule } from './parser/parser.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      // host: 'localhost',
      // port: 3306,
      // username: 'root',
      // password: 'root',
      database: 'r-vod.sqlite3',
      autoLoadEntities: true,
      synchronize: true, // Set false in production
    }),
    ContentsModule,
    PlatformModule,
    ParserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
