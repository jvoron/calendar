import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, Injector, OnInit } from '@angular/core';
import {Task} from './model/task';

import {Observable} from 'rxjs';
import {AppConfig, CONFIG_TOKEN} from './config';
import {TASKS} from '../db-data';
import {TasksService} from './tasks/tasks.service';
import {createCustomElement} from '@angular/elements';
import {TaskTitleComponent} from './task-title/task-title.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tasks: Task[] = TASKS;

  tasksTotal = this.tasks.length;

  constructor(
      private tasksService: TasksService,
      @Inject(CONFIG_TOKEN) private config: AppConfig,
      private injector: Injector) {

  }

  ngOnInit() {

      const htmlElement = createCustomElement(TaskTitleComponent, {injector:this.injector});

      customElements.define('task-title', htmlElement);

  }

  onEditCourse() {

          this.tasks[1].category = 'ADVANCED';

  }

  save(task: Task) {
      this.tasksService.saveTask(task)
          .subscribe(
              () => console.log('Task Saved!')
          );
  }


}