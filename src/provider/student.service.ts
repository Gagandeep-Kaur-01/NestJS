import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entity/Student.entity';
import { Repository } from 'typeorm';
export interface StudentInterface {
  name: string,
  complete: boolean,
}
@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<StudentInterface>,
  ) {}

    create(student: StudentInterface): Promise<StudentInterface> {
        return this.studentRepository.save(
        this.studentRepository.create(student)
        );
    }

    findAll(): Promise<StudentInterface[]> {
        return this.studentRepository.find();
    }

    update(id: string, data: any): Promise<any> {
        return this.studentRepository
        .createQueryBuilder()
        .update()
        .set({
        name: data.name
        })
        .where('id = :id', { id })
        .execute()
    }
    
    delete(id: string): Promise<any> {
        return this.studentRepository
        .createQueryBuilder()
        .delete()
        .from(Student)
        .where('id = :id', { id })
        .execute()
    }
}