import { Router, Request, Response } from 'express';

import PharmaciesRepository from '../repositories/PharmaciesRepository';

const pharmaciesRepository = new PharmaciesRepository();

const pharmaciesRouter = Router();

pharmaciesRouter.post('/create', (request: Request, response: Response) => {
  const { name, cnpj } = request.body;
  const date = new Date();

  const pharmacy = pharmaciesRepository.create(name, cnpj, date);

  return response.json(pharmacy);
});

pharmaciesRouter.get('/', (request: Request, response: Response) => {
  const pharmacies = pharmaciesRepository.all();

  return response.json(pharmacies);
});

pharmaciesRouter.get('/:id', (request: Request, response: Response) => {
  const { id } = request.params;
  const pharmacy = pharmaciesRepository.find(id);

  return response.json(pharmacy);
});

pharmaciesRouter.put('/:id', (request: Request, response: Response) => {
  const { id } = request.params;
  const { name, cnpj, date } = request.body;

  const findPharmacyIndex = pharmaciesRepository.findIndexById(id);

  if (findPharmacyIndex === -1) {
    return response.status(400).json({ message: 'Pharmacy not found' });
  }

  const category = pharmaciesRepository.update(
    id,
    name,
    cnpj,
    date,
    findPharmacyIndex,
  );

  return response.json(category);
});

pharmaciesRouter.delete('/:id', (request: Request, response: Response) => {
  const { id } = request.params;

  const findPharmacyIndex = pharmaciesRepository.findIndexById(id);

  if (findPharmacyIndex === -1) {
    return response.status(400).json({ message: 'Pharmacy not found' });
  }

  pharmaciesRepository.delete(findPharmacyIndex);

  return response.status(200).send();
});

export default pharmaciesRouter;
