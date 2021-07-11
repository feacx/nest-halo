import { Document } from 'mongoose';

export interface Article extends Document {
  readonly _id: string;
  readonly id: string;
  readonly title: string;
  readonly content: string;
}
