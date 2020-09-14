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
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

DayONE = TASKS [0];
DayTWO = TASKS [1];


}
