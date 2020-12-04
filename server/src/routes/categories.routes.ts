import { Router, Request, Response } from 'express';

import CategoriesRepository from '../repositories/CategoriesRepository';

const categoriesRepository = new CategoriesRepository();

const categoriesRouter = Router();

categoriesRouter.post('/create', (request: Request, response: Response) => {
  const { description } = request.body;
  const date = new Date();

  const category = categoriesRepository.create(description, date);

  return response.json(category);
});

categoriesRouter.get('/', (request: Request, response: Response) => {
  const categories = categoriesRepository.all();

  return response.json(categories);
});

categoriesRouter.get('/:id', (request: Request, response: Response) => {
  const { id } = request.params;
  const category = categoriesRepository.find(id);

  return response.json(category);
});

categoriesRouter.put('/:id', (request: Request, response: Response) => {
  const { id } = request.params;
  const { description, date } = request.body;

  const findCategoryIndex = categoriesRepository.findIndexById(id);

  if (findCategoryIndex === -1) {
    return response.status(400).json({ message: 'Category not found' });
  }

  const category = categoriesRepository.update(
    id,
    description,
    date,
    findCategoryIndex,
  );

  return response.json(category);
});

categoriesRouter.delete('/:id', (request: Request, response: Response) => {
  const { id } = request.params;

  const findCategoryIndex = categoriesRepository.findIndexById(id);

  if (findCategoryIndex === -1) {
    return response.status(400).json({ message: 'Category not found' });
  }

  categoriesRepository.delete(findCategoryIndex);

  return response.status(200).send();
});

export default categoriesRouter;
