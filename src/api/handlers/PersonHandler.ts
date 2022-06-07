
import { Person } from '../../database/entities/Person';
import { AppDataSource } from '../../database/data-source';
import IPersonHandler from './interfaces/IPersonHandler';
import { Repository } from 'typeorm';

class PersonHandler implements IPersonHandler {
  repo: Repository<Person>;

  constructor() {
    this.repo = AppDataSource.getRepository(Person);
  }

  async getAll(): Promise<Person[]> {
    try {
      return await this.repo.find({});
    } catch (error) {
      throw error
    }
  }
}

export default new PersonHandler();
