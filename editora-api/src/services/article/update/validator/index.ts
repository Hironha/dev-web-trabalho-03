import * as Yup from 'yup';

import { ObjectValidator } from 'utility/object';
import type { UpdateArticleArg } from '../types';

export class UpdateArticleValidator {
  private entriesValidator: ObjectValidator<UpdateArticleArg>;

  constructor(private updateArg: UpdateArticleArg) {
    this.entriesValidator = new ObjectValidator(this.updateArg);
  }

  public validate() {
    if (!this.entriesValidator.compareProps(this.getPossibleEntries()))
      throw new Error('');

    const validationSchema = this.getValidationSchema();

    try {
      validationSchema.validateSync(this.updateArg, { abortEarly: false });
    } catch (err) {
      const { errors } = err as Yup.ValidationError;
      console.error(errors);
    }
  }

  private getPossibleEntries(): Array<keyof UpdateArticleArg> {
    return [
      'author',
      'is_active',
      'published',
      'published_at',
      'summary',
      'title',
    ];
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
