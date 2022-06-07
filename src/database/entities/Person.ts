import { Entity, Column } from 'typeorm';
import { Base } from './Base';
import { IPerson } from './interfaces';

@Entity()
export class Person extends Base implements IPerson {
  @Column({ name: 'name' })
  name: string
}
