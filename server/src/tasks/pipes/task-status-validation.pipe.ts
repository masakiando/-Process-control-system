import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatus = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE
    ];

    transform(value: any, matadata: ArgumentMetadata) {
        console.log('matadata', matadata); 
        value = value.toUpperCase();

        if(!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} is an invalid status`);
        }
        
        return value;
    }

    private isStatusValid(statue: any): boolean {
        const index = this.allowedStatus.indexOf(statue);
        return index !== -1
    }
}