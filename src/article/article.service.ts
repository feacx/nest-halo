import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDTO, EditArticleDTO } from './article.dto';
import { Article } from './article.interface';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Articles') private readonly articleModel: Model<Article>,
  ) {}

  // 查找所有用户
  async findALl(): Promise<Article[]> {
    const articles = await this.articleModel.find();
    return articles;
  }

  // 查找单篇文章
  async findOne(_id: string): Promise<Article> {
    return await this.articleModel.findById(_id);
  }

  // 添加一篇文章
  async addOne(body: CreateArticleDTO): Promise<void> {
    await this.articleModel.create(body);
  }

  // 编辑一篇文章
  async editOne(_id: string, body: EditArticleDTO): Promise<void> {
    await this.articleModel.findByIdAndUpdate(_id, body);
  }

  async deleteOne(_id: string): Promise<void> {
    await this.articleModel.findByIdAndDelete(_id);
  }
}
