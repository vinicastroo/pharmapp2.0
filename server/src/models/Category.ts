import { v4 as uuid } from 'uuid';

class Category {
  id: string;

  description: string;

  date: Date;

  constructor(description: string, date: Date) {
    this.id = uuid();
    this.description = description;
    this.date = date;
  }
}

export default Category;
