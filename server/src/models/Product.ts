import { v4 as uuid } from 'uuid';

class Product {
  id: string;

  description: string;

  value: string;

  date: Date;

  constructor(description: string, value: string, date: Date) {
    this.id = uuid();
    this.value = value;
    this.description = description;
    this.date = date;
  }
}

export default Product;
