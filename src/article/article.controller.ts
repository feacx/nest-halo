import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get('articles')
  findAll() {
    return 'All user’s info';
  }
}
