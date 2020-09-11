import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, DoCheck,
  EventEmitter,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {Task} from '../../model/task';
import {TasksService} from '../tasks.service';



@Component({
  selector: 'task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements  OnInit {

  @Input()
  task: Task;

  @Input()
  cardIndex: number;

  @Output('taskChanged')
  taskEmitter = new EventEmitter<Task>();




  constructor(private tasksService: TasksService,
              @Attribute('type') private type: string) {


  }

  ngOnInit() {


  }



  onTitleChanged(newTitle: string) {

      this.task.description = newTitle;

  }


  onSaveClicked(description: string) {

      this.taskEmitter.emit({...this.task, description});

  }


}
