import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'task-image',
  templateUrl: './task-image.component.html',
  styleUrls: ['./task-image.component.css']
})
export class TaskImageComponent implements OnInit {

  @Input('src')
  imageUrl:string;



  constructor() { }

  ngOnInit() {
  }

}