import { v4 as uuid } from 'uuid';

class Pharmacy {
  id: string;

  name: string;

  cnpj: string;

  date: Date;

  constructor(name: string, cnpj: string, date: Date) {
    this.id = uuid();
    this.name = name;
    this.cnpj = cnpj;
    this.date = date;
  }
}

export default Pharmacy;
