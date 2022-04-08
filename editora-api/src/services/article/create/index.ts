import prisma from 'services/prisma';
import { v4 as uuidv4 } from 'uuid';

import { CreateArticleValidator } from './validator';

import type { CreateArticleArg } from './types';

export class CreateArticle {
  private validator: CreateArticleValidator;

  constructor(private createArg: CreateArticleArg) {
    this.validator = new CreateArticleValidator(this.createArg);
  }

  public async exec() {
    this.validator.validate();

    const createdArticle = await this.create();

    return createdArticle;
  }

  private async create() {
    const createdArticle = await prisma.article
      .create({
        data: {
          ...this.createArg,
          uuid: uuidv4(),
        },
      })
      .catch((err) => console.error(err));

    return createdArticle;
  }
}
