import { Component, OnInit, Input } from '@angular/core';
import {TASKS} from '../../db-data';
import { DecimalPipe } from '@angular/common';
import {Task} from '../model/task';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  @Input()
 task:Task;

  constructor() { }

  ngOnInit(): void {
  }

}

