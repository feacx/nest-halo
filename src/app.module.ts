import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
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
    }),
    ArticleModule,
  ],
})
export class AppModule {}
