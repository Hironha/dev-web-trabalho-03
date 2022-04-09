import * as Yup from 'yup';

import { ObjectValidator } from 'utility/object';

import type { CreateArticleArg } from '../types';

export class CreateArticleValidator {
  private entryValidator: ObjectValidator<CreateArticleArg>;

  constructor(private createArg: CreateArticleArg) {
    this.entryValidator = new ObjectValidator(this.createArg);
  }

  public validate() {
    if (!this.entryValidator.compareProps(this.getPossibleEntries()))
      throw new Error('');

    const validationSchema = this.getValidationSchema();

    try {
      validationSchema.validateSync(this.createArg, { abortEarly: false });
    } catch (error) {
      const { errors } = error as Yup.ValidationError;
      console.error(errors);
    }
  }

  private getPossibleEntries(): Array<keyof CreateArticleArg> {
    return ['author', 'published', 'published_at', 'summary', 'title'];
  }

  private getValidationSchema() {
    const validationSchema: Yup.SchemaOf<CreateArticleArg> = Yup.object().shape(
      {
        published: Yup.boolean().required().nullable(),
        summary: Yup.string().required().nullable(),
        title: Yup.string().required(),
        author: Yup.string().required(),
        published_at: Yup.date().required(),
      }
    );

    return validationSchema;
  }
}
