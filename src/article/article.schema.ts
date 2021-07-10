// user.schema.ts
import { Schema } from 'mongoose';

export const articleSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});
