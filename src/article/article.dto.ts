export class CreateArticleDTO {
  readonly _id: string;
  readonly user_name: string;
  readonly password: string;
}

export class EditArticleDTO {
  readonly user_name: string;
  readonly password: string;
}
