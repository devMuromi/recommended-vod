import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsModule } from './contents/contents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatformModule } from './platform/platform.module';
import { ParserModule } from './parser/parser.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      // host: 'localhost',
      // port: 3306,
      // username: 'root',
      // password: 'root',
      database: 'r-vod',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ContentsModule,
    PlatformModule,
    ParserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
