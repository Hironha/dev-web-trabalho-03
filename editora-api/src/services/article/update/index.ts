import prisma from 'services/prisma';

import { UpdateArticleValidator } from './validator';

import type { UpdateArticleArg } from './types';

export class UpdateArticle {
  private validator: UpdateArticleValidator;
  constructor(private updateArg: UpdateArticleArg) {
    this.validator = new UpdateArticleValidator(this.updateArg);
  }

  public async exec() {
    this.validator.validate();

    const updatedArticle = await this.update();

    return updatedArticle;
  }

  private async update() {
    const updatedArticle = await prisma.article
      .update({
        where: {
          id: this.updateArg.id,
        },
        data: {
          ...this.updateArg,
          updated_at: new Date(),
        },
      })
      .catch((err) => {
        console.error(err);
        throw new Error('');
      });

    return updatedArticle;
  }
}
