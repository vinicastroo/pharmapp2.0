import { v4 as uuid } from 'uuid';

class Product {
  id: string;

  description: string;

  value: string;

  date: Date;

  category_id: string;

  constructor(
    description: string,
    value: string,
    date: Date,
    category_id: string,
  ) {
    this.id = uuid();
    this.date = date;
    this.value = value;
    this.category_id = category_id;
    this.description = description;
  }
}

export default Product;
