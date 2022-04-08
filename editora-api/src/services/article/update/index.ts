import prisma from 'services/prisma';

import type { UpdateArticleArg } from './types';

export class UpdateArticle {
  constructor(private updateArg: UpdateArticleArg) {}

  public async exec() {
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
      .catch((err) => console.error(err));

    return updatedArticle;
  }
}
