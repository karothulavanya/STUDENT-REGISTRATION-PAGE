import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Student> {
    return this.studentsService.findOne(+id);
  }

  @Post()
  create(@Body() student: Student): Promise<Student> {
    return this.studentsService.create(student);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() student: Student): Promise<any> {
    return this.studentsService.update(+id, student);
  }


  @Delete(':id')
  delete(@Param('id') id: number): Promise<any> {
    console.log('Deleting student with ID:', id); // Debugging
    return this.studentsService.delete(+id);
  }
}
