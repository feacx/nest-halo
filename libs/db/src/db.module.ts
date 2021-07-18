import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbService } from './db.service';
import { ArticleEntity } from './entities/article.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/fash',
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
      entities: [ArticleEntity],
    }),
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
