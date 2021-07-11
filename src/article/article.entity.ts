import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Article {
  @ObjectIdColumn()
  _id: string;

  @Column()
  title: string;

  @Column()
  content: string;
}
