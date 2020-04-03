import { Injectable, ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum'

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private TaskRepository: TaskRepository,
    ) {}
    
    getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
      return this.TaskRepository.getTask(filterDto); 
    }
    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    // getTasksWithFilers(filterDto: GetTasksFilterDto): Task[] {
    //     const { status, search } = filterDto;

    //     let tasks = this.getAllTasks();

    //     if ( status ) {
    //         tasks = tasks.filter(task => task.status === status);
    //     }

    //     if ( search ) {
    //         tasks = tasks.filter( task => 
    //             task.title.includes(search) ||
    //             task.description.includes(search),  
    //         );
    //     }
    //     return tasks;
    // }
    async getTaskById(id: number): Promise<Task> {
        const found = await this.TaskRepository.findOne(id);

        if(!found) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }

        return found;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.TaskRepository.createTask(createTaskDto); 
    }
   
    async deleteTask(id: number): Promise<void> {
        const result = await this.TaskRepository.delete(id);

        if(result.affected === 0) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
    }

    async updateTaskStatus(id: number, status: TaskStatus) {
        const task = await this.getTaskById(id);
        task.status = status;
        await task.save();
        return task;
    }
}
