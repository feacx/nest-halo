import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('articles')
export class ArticleEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
