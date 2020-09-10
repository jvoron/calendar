import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayViewComponent } from './day-view.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [DayViewComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DayViewComponent]
})
export class DayViewModule { }
