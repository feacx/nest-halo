import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ObjectIdColumn,
} from 'typeorm';

@Entity('articles')
export class ArticleEntity {
  @ObjectIdColumn()
  _id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @CreateDateColumn()
  created: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
