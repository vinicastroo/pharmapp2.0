import { Router, Request, Response } from 'express';

import UsersRepository from '../repositories/UsersRepository';

const usersRepository = new UsersRepository();

const usersRouter = Router();

usersRouter.post('/create', async (request: Request, response: Response) => {
  const { email, password } = request.body;
  const date = new Date();

  const user = await usersRepository.create(email, password, date);

  return response.json(user);
});

usersRouter.get('/', (request: Request, response: Response) => {
  const users = usersRepository.all();

  return response.json(users);
});

usersRouter.get('/:id', (request: Request, response: Response) => {
  const { id } = request.params;
  const user = usersRepository.find(id);

  return response.json(user);
});

usersRouter.put('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const { email, password, date } = request.body;

  const findUserIndex = usersRepository.findIndexById(id);

  if (findUserIndex === -1) {
    return response.status(400).json({ message: 'User not found' });
  }

  const user = await usersRepository.update(
    id,
    email,
    password,
    date,
    findUserIndex,
  );

  return response.json(user);
});

usersRouter.delete('/:id', (request: Request, response: Response) => {
  const { id } = request.params;

  const findUserIndex = usersRepository.findIndexById(id);

  if (findUserIndex === -1) {
    return response.status(400).json({ message: 'User not found' });
  }

  usersRepository.delete(findUserIndex);

  return response.status(200).send();
});

export default usersRouter;
