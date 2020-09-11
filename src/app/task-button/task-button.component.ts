import { Component, OnInit } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-task-button',
  templateUrl: './task-button.component.html',
  styleUrls: ['./task-button.component.scss']
})
export class TaskButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnButtonClicked(){

    console.log(" task button component - button clicked");

  }

}
