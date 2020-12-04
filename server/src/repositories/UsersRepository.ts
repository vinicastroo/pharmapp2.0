import { hash } from 'bcryptjs';
import User from '../models/User';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public findIndexById(id: string): number {
    const findUserIndex = this.users.findIndex(user => id === user.id);

    return findUserIndex;
  }

  public find(id: string): User | boolean {
    const findIndex = this.users.findIndex(user => id === user.id);

    if (findIndex !== -1) {
      return this.users[findIndex];
    }

    return false;
  }

  public async create(
    email: string,
    password: string,
    date: Date,
  ): Promise<User> {
    const hasedPassword = await hash(password, 8);
    const user = new User(email, hasedPassword, date);

    this.users.push(user);

    return user;
  }

  public all(): User[] {
    return this.users;
  }

  public async update(
    id: string,
    email: string,
    password: string,
    date: Date,
    indexId: number,
  ): Promise<User> {
    const hasedPassword = await hash(password, 8);

    this.users[indexId] = {
      id,
      email,
      password: hasedPassword,
      date,
    };

    return this.users[indexId];
  }

  public delete(indexId: number): User[] {
    this.users.splice(indexId, 1);
    return this.users;
  }
}

export default UsersRepository;
