import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DayViewModule} from './day-view/day-view.module';
import {DailySelectionModule} from './daily-selection/daily-selection.module';
import { DayViewComponent } from './day-view/day-view.component';
import { TaskButtonComponent } from './task-button/task-button.component';
import { TaskViewComponent } from './task-view/task-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DayViewComponent,
    TaskButtonComponent,
    TaskViewComponent
  ],
  imports: [
    BrowserModule,
    DailySelectionModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
