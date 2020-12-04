import express from 'express';
import cors from 'cors';
import routes from './routes';
import 'express-async-errors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server Started on port 3333!');
});
