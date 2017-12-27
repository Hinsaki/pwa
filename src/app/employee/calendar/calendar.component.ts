import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../service/calendar.service';

@Component({
  selector: 'emp-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  constructor(public calendarService: CalendarService) { }

  ngOnInit() {
    this.getToday();
  }

  getToday() {
    this.calendarService.getToday();
  }

  getDay(addDMonth: number = 0) {
    this.calendarService.getDay(addDMonth);
  }

  selectdDay(item: any) {
    this.calendarService.selectdDay(item);
  }

}
