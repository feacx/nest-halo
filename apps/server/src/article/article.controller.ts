import { ArticleEntity } from '@libs/db/entities/article.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateArticleDTO, EditArticleDTO } from './article.dto';
import { ArticleService } from './article.service';

interface ArticleResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('article')
@ApiTags('文章')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('articles')
  async findAll(): Promise<ArticleResponse<ArticleEntity[]>> {
    return {
      code: 200,
      data: await this.articleService.findAll(),
      message: 'Success.',
    };
  }

  @Get(':_id')
  async findOne(
    @Param('_id') _id: string,
  ): Promise<ArticleResponse<ArticleEntity>> {
    return {
      code: 200,
      data: await this.articleService.findOne(_id),
      message: 'Success.',
    };
  }

  @Post()
  async addOne(@Body() body: CreateArticleDTO): Promise<ArticleResponse> {
    const article = await this.articleService.create(body);
    return {
      code: 200,
      data: article,
      message: 'Success.',
    };
  }

  @Put(':_id')
  async editOne(
    @Param('_id') _id: string,
    @Body() body: EditArticleDTO,
  ): Promise<ArticleResponse> {
    await this.articleService.editOne(_id, body);
    return {
      code: 200,
      data: await this.articleService.findOne(_id),
      message: 'Success.',
    };
  }

  @Delete(':_id')
  async deleteOne(@Param('_id') _id: string): Promise<ArticleResponse> {
    await this.articleService.deleteOne(_id);
    return {
      code: 200,
      message: 'Success.',
    };
  }
}
