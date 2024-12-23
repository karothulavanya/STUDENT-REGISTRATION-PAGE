import { Repository } from 'typeorm';
import { Student } from './student.entity';
export declare class StudentsService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<Student>);
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    create(student: Student): Promise<Student>;
    update(id: number, student: Student): Promise<any>;
    delete(id: number): Promise<any>;
}
