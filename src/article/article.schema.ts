// user.schema.ts
import { Schema } from 'mongoose';

export const ArticleSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});
