import prisma from "services/prisma";

export class FindAllArticles {
  constructor() {}

  public async exec() {
    const articles = await this.findAll();

    return articles;
  }

  private async findAll() {
    const articles = await prisma.article.findMany().catch((err) => console.error(err));

    return articles;
  }
}
