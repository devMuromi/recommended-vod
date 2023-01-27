import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsModule } from './contents/contents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatformModule } from './platform/platform.module';
<<<<<<< HEAD
import { ParserModule } from './parser/parser.module';
=======
>>>>>>> 6e1df11a2e77e8731c15d47ead93a2537e933e48

@Module({
  imports: [
    ContentsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'r-vod',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PlatformModule,
<<<<<<< HEAD
    ParserModule,
=======
>>>>>>> 6e1df11a2e77e8731c15d47ead93a2537e933e48
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
