import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [DbModule, ArticleModule],
})
export class AppModule {}
