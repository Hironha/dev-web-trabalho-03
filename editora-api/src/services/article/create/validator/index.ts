import * as Yup from "yup";

import { CreateArticleArg } from "../types";

export class CreateArticleValidator {
  constructor(private createArg: CreateArticleArg) {}

  public validate() {
    const validationSchema = this.getValidationSchema();

    try {
      validationSchema.validateSync(this.createArg, { abortEarly: false });
    } catch (error) {
      const { errors } = error as Yup.ValidationError;
      console.error(errors);
    }
  }

  private getValidationSchema() {
    const validationSchema: Yup.SchemaOf<CreateArticleArg> = Yup.object().shape({
      published: Yup.boolean().required().nullable(),
      summary: Yup.string().required().nullable(),
      title: Yup.string().required(),
      author: Yup.string().required(),
      published_at: Yup.date().required(),
    });

    return validationSchema;
  }
}
