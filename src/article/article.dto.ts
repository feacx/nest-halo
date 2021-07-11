export class CreateArticleDTO {
  readonly _id: string;
  readonly title: string;
  readonly content: string;
  created_at(): Date {
    return new Date();
  }
}

export class EditArticleDTO {
  readonly title: string;
  readonly content: string;
}
