import { Person } from 'src/database/entities/Person';

export default interface IPersonHandler {
  getAll(): Promise<Person[]>;
  create(payload: { name: string, position: number }): Promise<Person>;
  update(id:number, payload: { name: string, position: number }): Promise<Person | null>;
  delete(id: number): Promise<boolean>;
}
