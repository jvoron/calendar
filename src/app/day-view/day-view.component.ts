import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import * as range from 'lodash.range';

export interface CalendarDate {
  mDate: moment.Moment;
  selected?: boolean;
  today?: boolean;
}

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {
  public currentDate: moment.Moment;
  public namesOfDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   

  public weeks: Array<CalendarDate[]> = [];

  public selectedDate;
  public show: boolean;

  @ViewChild('calendar', {static: true}) calendar;

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.show = false;
    }
  }

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
    this.currentDate = moment();
    this.selectedDate = moment(this.currentDate).format('DD/MM/YYYY');
    this.generateCalendar();
  }

  private generateCalendar(): void {
    const dates = this.fillDates(this.currentDate);
    const weeks = [];
    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }
    this.weeks = weeks;

  }





  private fillDates(currentMoment: moment.Moment) {
    const firstOfMonth = moment(currentMoment).subtract(6, 'days');
    const lastOfMonth = moment(currentMoment).subtract(-1, 'days');

    const firstDayOfGrid = moment(currentMoment).subtract(6, 'days');
    const lastDayOfGrid = moment(currentMoment).subtract(-1, 'days');

  


    const startCalendar = firstDayOfGrid.date();

    return range(startCalendar, startCalendar + lastDayOfGrid.diff(firstDayOfGrid, 'days')).map((date) => {
      const newDate = moment(firstDayOfGrid).date(date);
      return {
        today: this.isToday(newDate),
        selected: this.isSelected(newDate),
        dayNameUsed: this.namesOfDays[newDate.weekday()],
        mDate: newDate,

      }
    });
  }

  public prevMonth(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'months');
    this.generateCalendar();
  }

  public nextMonth(): void {
    this.currentDate = moment(this.currentDate).add(1, 'months');
    this.generateCalendar();
  }

   

  public isDisabledMonth(currentDate): boolean {
    const today = moment();
    return moment(currentDate).isBefore(today, 'months');
  }

  private isToday(date: moment.Moment): boolean {
    return moment().isSame(moment(date), 'day');
  }

  private isSelected(date: moment.Moment): boolean {
    return this.selectedDate === moment(date).format('DD/MM/YYYY');
  }

  public isSelectedMonth(date: moment.Moment): boolean {
    const today = moment();
    return moment(date).isSame(this.currentDate, 'month') && moment(date).isSameOrBefore(today);
  }

  public selectDate(date: CalendarDate) {
    this.selectedDate = moment(date.mDate).format('DD/MM/YYYY');

    this.generateCalendar();
    this.show = !this.show;
  }
}
