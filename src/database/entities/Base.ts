import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

interface IBase {
  id: number,
  createdAt: Date,
  updatedAt: Date
}

export abstract class Base implements IBase {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  updatedAt!: Date;
}
