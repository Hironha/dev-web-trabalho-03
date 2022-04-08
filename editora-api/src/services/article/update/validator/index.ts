import * as Yup from 'yup';

import type { UpdateArticleArg } from '../types';

export class UpdateArticleValidator {
  constructor(private updateArg: UpdateArticleArg) {}

  public validate() {
    const validationSchema = this.getValidationSchema();

    try {
      validationSchema.validateSync(this.updateArg, { abortEarly: false });
    } catch (err) {
      const { errors } = err as Yup.ValidationError;
      console.error(errors);
    }
  }

  private getValidationSchema() {
    const validationSchema: Yup.SchemaOf<UpdateArticleArg> = Yup.object().shape(
      {
        id: Yup.number().required(),
        published: Yup.boolean().notRequired(),
        summary: Yup.string().nullable().notRequired(),
        title: Yup.string().notRequired(),
        author: Yup.string().notRequired(),
        published_at: Yup.date().notRequired(),
        is_active: Yup.boolean().notRequired(),
      }
    );

    return validationSchema;
  }
}
