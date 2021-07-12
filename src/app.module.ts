import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from './article/article.entity';
import { ArticleModule } from './article/article.module';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://localhost/fash'), ArticleModule],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/fash',
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
      entities: [ArticleEntity],
    }),
    ArticleModule,
  ],
})
export class AppModule {}
