import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskCardComponent} from './task-card/task-card.component';
import {TaskImageComponent} from './task-image/task-image.component';
import {TasksService} from './tasks.service';
import {HighlightedDirective} from './directives/highlighted.directive';
import {NgxUnlessDirective} from './directives/ngx-unless.directive';
import {HttpClientModule} from '@angular/common/http';
import {FilterByCategoryPipe} from './filter-by-category.pipe';
/* import {TaskTitleComponent} from '../task-title/task-title.component';*/

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
     TaskCardComponent,
      TaskImageComponent,
      HighlightedDirective,
      NgxUnlessDirective,
      FilterByCategoryPipe
  ],
    exports: [
        TaskCardComponent,
        TaskImageComponent,
        FilterByCategoryPipe
    ],
    providers: [TasksService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksModule { }