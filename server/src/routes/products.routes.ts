import { Router, Request, Response } from 'express';

import ProductRepository from '../repositories/ProductsRepository';

const productsRepository = new ProductRepository();

const productsRouter = Router();

productsRouter.post('/create', (request: Request, response: Response) => {
  const { description, value } = request.body;
  const date = new Date();

  const product = productsRepository.create(description, value, date);

  return response.json(product);
});

productsRouter.get('/', (request: Request, response: Response) => {
  const products = productsRepository.all();

  return response.json(products);
});

productsRouter.get('/:id', (request: Request, response: Response) => {
  const { id } = request.params;
  const product = productsRepository.find(id);

  return response.json(product);
});

productsRouter.put('/:id', (request: Request, response: Response) => {
  const { id } = request.params;
  const { description, value, date } = request.body;

  const findProductIndex = productsRepository.findIndexById(id);

  if (findProductIndex === -1) {
    return response.status(400).json({ message: 'Product not found' });
  }

  const product = productsRepository.update(
    id,
    description,
    value,
    date,
    findProductIndex,
  );

  return response.json(product);
});

productsRouter.delete('/:id', (request: Request, response: Response) => {
  const { id } = request.params;

  const findProductIndex = productsRepository.findIndexById(id);

  if (findProductIndex === -1) {
    return response.status(400).json({ message: 'Product not found' });
  }

  productsRepository.delete(findProductIndex);

  return response.status(200).send();
});

export default productsRouter;
