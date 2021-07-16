import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDTO {
  readonly _id: string;
  @ApiProperty({ description: '标题', example: '钓鱼秘方大揭秘' })
  readonly title: string;
  @ApiProperty({ description: '内容', example: '内容内容内容' })
  readonly content: string;
}

export class EditArticleDTO {
  readonly title: string;
  readonly content: string;
}
