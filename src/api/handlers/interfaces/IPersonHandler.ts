import { Person } from 'src/database/entities/Person';

export default interface IPersonHandler {
  getAll(): Promise<Person[]>;
  create(payload: { name: string }): Promise<Person>;
  update(id:number, payload: { name: string }): Promise<Person | null>;
  delete(id: number): Promise<boolean>;
}
