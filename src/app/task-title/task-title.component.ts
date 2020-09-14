import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-title',
  templateUrl: './task-title.component.html',
  styleUrls: ['./task-title.component.scss']
})
export class TaskTitleComponent implements OnInit {

  @Input()
  title:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
