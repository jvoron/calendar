import { Component, OnInit, Input } from '@angular/core';
import {TASKS} from '../../db-data';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  @Input()
  id: number;
  date: Date;
  quantity: number;
  price: DecimalPipe;
  eventTypeName: string;
  isExpenseType: boolean;
  isHoursEventType: boolean;
  isAdditionalHoursEventType: boolean;
  isWorkHour: boolean;
  isApproved: boolean;
  isRejected: boolean;
  tasksCount: number;
  firstTaskStart: Date;
  lastTaskEnd: Date;

  constructor() { }

  ngOnInit(): void {
  }

}

