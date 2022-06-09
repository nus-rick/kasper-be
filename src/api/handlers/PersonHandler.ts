
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

  async create(payload: { name: string, position: number }): Promise<Person> {
    try {
      const newPerson = new Person();
      newPerson.name = payload.name;
      const savedPerson = await this.repo.save(newPerson);

      return savedPerson;
    } catch (error) {
      throw error
    }
  }

  async update(id: number, payload: { name: string, position: number }): Promise<Person | null> {
    try {
      const person = await this.repo.findOne({
        where: { id }
      });

      if (!person) {
        return null;
      }

      person.name = payload.name;

      const savedPerson = await this.repo.save(person);

      return savedPerson;
    } catch (error) {
      throw error
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const person = await this.repo.findOne({
        where: { id }
      });

      if (!person) {
        return false;
      }

      await this.repo.delete(person);

      return true;
    } catch (error) {
      throw error
    }
  }
}

export default new PersonHandler();
