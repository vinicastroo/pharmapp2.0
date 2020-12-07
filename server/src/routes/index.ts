import { Router } from 'express';

import categoriesRouter from './categories.routes';
import pharmaciesRouter from './pharmacies.routes';
import usersRouter from './users.routes';
import productsRouter from './products.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/products', productsRouter);
routes.use('/categories', categoriesRouter);
routes.use('/pharmacies', pharmaciesRouter);

export default routes;
