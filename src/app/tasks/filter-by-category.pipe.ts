import {Pipe, PipeTransform} from '@angular/core';
import {Task} from '../model/task';


@Pipe({
    name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {


    transform(tasks: Task[], category:string) {

        console.log('Called transform()');

        return tasks.filter(task => task.category === category);
    }

}