import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DayViewModule} from './day-view/day-view.module';
import {DailySelectionModule} from './daily-selection/daily-selection.module';
import { DayViewComponent } from './day-view/day-view.component';
import { TaskButtonComponent } from './task-button/task-button.component';
import { TaskCardComponent } from './tasks/task-card/task-card.component';
import { TaskTitleComponent } from './task-title/task-title.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { TasksService } from './tasks/tasks.service';


@NgModule({
  declarations: [
    AppComponent,
    DayViewComponent,
    TaskButtonComponent,
    TaskCardComponent,
    TaskTitleComponent
  ],
  imports: [
    BrowserModule,
    DailySelectionModule,
    BrowserAnimationsModule,
    HttpClientModule
 
    
  ],
  providers: [TasksService],
  bootstrap: [AppComponent],
  entryComponents: [TaskTitleComponent]
})
export class AppModule { }
