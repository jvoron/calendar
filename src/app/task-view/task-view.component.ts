import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export const TASKS: any ={
  
  {date: '2020-09-11',
  quantity: 5,
  price: 6,
  eventTypeName: 'Lunch',
  isExpenseType: false,
  isHoursEventType: true,
  isAdditionalHoursEventType: false,
  isWorkHour: false,
  isApproved: false,
  isRejected: false,
  tasksCount: 2,
  firstTaskStart: '2020-09-11 08:00',
  lastTaskEnd: '2020-09-11 17:00'
  },
  {date: '2020-09-12',
  quantity: 5,
  price: 6,
  eventTypeName: 'Lunch',
  isExpenseType: false,
  isHoursEventType: true,
  isAdditionalHoursEventType: false,
  isWorkHour: false,
  isApproved: false,
  isRejected: false,
  tasksCount: 2,
  firstTaskStart: '2020-09-12 08:00',
  lastTaskEnd: '2020-09-12 17:00'
  }



}
