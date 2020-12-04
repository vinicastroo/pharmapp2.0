import { v4 as uuid } from 'uuid';

class User {
  id: string;

  email: string;

  password: string;

  date: Date;

  constructor(email: string, password: string, date: Date) {
    this.id = uuid();
    this.email = email;
    this.password = password;
    this.date = date;
  }
}

export default User;
