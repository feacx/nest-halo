// user.schema.ts
import { Schema } from 'mongoose';

export const articleSchema = new Schema({
  _id: { type: String, required: true }, // 覆盖 Mongoose 生成的默认 _id
  title: { type: String, required: true },
  content: { type: String, required: true },
});
