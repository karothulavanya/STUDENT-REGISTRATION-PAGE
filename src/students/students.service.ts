import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find({
      select: [
        'id',
        'firstName',
        'lastName',
        'dob',
        'studentId',
        'gender',
        'streetAddress',
        'city',
        'state',
        'country',
        'phone',
        'email',
      ],
    });
  }

  findOne(id: number): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } });
  }

  create(student: Student): Promise<Student> {
    const dob = new Date(student.dob);
    const formattedDob = dob.toISOString().split('T')[0];
    student.dob = formattedDob;

    return this.studentRepository.save(student);
  }

  update(id: number, student: Student): Promise<any> {
    return this.studentRepository.update(id, student);
  }

  delete(id: number): Promise<any> {
    return this.studentRepository.delete(id);
  }
}
