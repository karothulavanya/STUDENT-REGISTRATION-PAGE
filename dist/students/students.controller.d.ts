import { StudentsService } from './students.service';
import { Student } from './student.entity';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    create(student: Student): Promise<Student>;
    update(id: number, student: Student): Promise<any>;
    delete(id: number): Promise<any>;
}
