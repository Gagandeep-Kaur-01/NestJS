import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { StudentInterface, StudentsService } from 'src/provider/student.service';

interface CreateStudentDto {
  name: string,
  complete: boolean
}

@Controller('cats')
export class StudentsController {

    constructor(private studentsService: StudentsService) {}

    @Post()
    async create(@Body() createStudentDto: CreateStudentDto) {
        const student = await this.studentsService.create(createStudentDto);
        if(!student) {
        return 'error in creating student'
        }
        return 'student created successfully'
    }

    @Get()
    async findAll(@Req() request: Request) {
        const cats: Array<StudentInterface> = await this.studentsService.findAll()
        return cats
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newCat: any = await this.studentsService.update(id, body)
        return "cat updated";
    }
    
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.studentsService.delete(id)
        return "cat deleted"
    }
}