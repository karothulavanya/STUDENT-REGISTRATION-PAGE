import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'date',nullable:true })
  dob:string;

  @Column()
  studentId: string;

  @Column()
  gender: string;

  @Column()
  streetAddress: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  phone: string;

  @Column()
  email: string;
}
