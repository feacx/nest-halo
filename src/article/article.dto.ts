export class CreateArticleDTO {
  readonly _id: string;
  readonly title: string;
  readonly content: string;
}

export class EditArticleDTO {
  readonly title: string;
  readonly content: string;
}
