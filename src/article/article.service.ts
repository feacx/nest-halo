import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDTO, EditArticleDTO } from './article.dto';
import { ArticleEntity } from './article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleModel: Repository<ArticleEntity>,
  ) {}

  // 查找所有文章
  async findAll(): Promise<ArticleEntity[]> {
    return await this.articleModel.find();
  }

  // 查找单篇文章
  async findOne(_id: string): Promise<ArticleEntity> {
    return await this.articleModel.findOne(_id);
  }

  // 添加一篇文章
  async create(body: CreateArticleDTO): Promise<ArticleEntity> {
    return this.articleModel.create(body);
  }

  // 编辑一篇文章
  async editOne(_id: string, body: EditArticleDTO) {
    await this.articleModel.update(_id, body);
  }

  async deleteOne(_id: string): Promise<void> {
    await this.articleModel.delete(_id);
  }
}
