import { Person } from 'src/database/entities/Person';

export default interface IPersonHandler {
  getAll(): Promise<Person[]>
}
