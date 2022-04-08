import {
  CreateArticle,
  FindAllArticles,
  UpdateArticle,
} from 'services/article';

import type { Controller } from 'types/controller';

export const findAll: Controller = async (req, res) => {
  const findAllArticles = new FindAllArticles();

  const articles = await findAllArticles.exec();

  res.status(200).json(articles);
};

export const createArticle: Controller = async (req, res) => {
  const create = new CreateArticle({
    author: req.body.author,
    published: req.body.published,
    published_at: req.body.published,
    summary: req.body.summary,
    title: req.body.title,
  });

  try {
    const createdArticle = await create.exec();

    res.status(200).json(createdArticle);
  } catch (err) {
    res.status(500).json({ message: 'Algo de inesperado aconteceu.' });
  }
};

export const updateArticle: Controller = async (req, res) => {
  const { id } = req.params;
  const update = new UpdateArticle({
    id: Number(id),
    author: req.body.author,
    is_active: req.body.is_active,
    published: req.body.published,
    published_at: req.body.published_at,
    summary: req.body.published,
    title: req.body.title,
  });

  try {
    const updatedArticle = await update.exec();

    res.status(200).json(updatedArticle);
  } catch (err) {
    res.status(500).json({ message: 'Algo de inesperado aconteceu.' });
  }
};
