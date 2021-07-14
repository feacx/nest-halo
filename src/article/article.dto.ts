export class CreateArticleDTO {
  readonly _id: string;
  readonly title: string;
  readonly content: string;
}

export class EditArticleDTO {
  readonly title: string;
  readonly content: string;
}

export class DeleteArticleDTO {
  readonly title: string;
  readonly content: string;
  deleted: Date;
}
