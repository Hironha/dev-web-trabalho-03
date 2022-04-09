import {
  CreateArticle,
  FindAllArticles,
  UpdateArticle,
} from 'services/article';

import type { Controller } from 'types/controller';

export const findAll: Controller = async (req, res) => {
  const findAllArticles = new FindAllArticles();

  try {
    const articles = await findAllArticles.exec();

    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: 'Algo de inesperado aconteceu.' });
  }
};

export const createArticle: Controller = async (req, res) => {
  const create = new CreateArticle(req.body);

  try {
    const createdArticle = await create.exec();

    res.status(200).json(createdArticle);
  } catch (err) {
    res.status(500).json({ message: 'Algo de inesperado aconteceu.' });
  }
};

export const updateArticle: Controller = async (req, res) => {
  const { id } = req.params;
  const update = new UpdateArticle({ ...req.body, id: Number(id) });

  try {
    const updatedArticle = await update.exec();

    res.status(200).json(updatedArticle);
  } catch (err) {
    res.status(500).json({ message: 'Algo de inesperado aconteceu.' });
  }
};
