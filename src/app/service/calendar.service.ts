import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {
  selectedDay: Date;
  selectedMonth = '';
  dayHeaders = ['日', '一', '二', '三', '四', '五', '六'];
  dayColors = ['red', 'white', 'white', 'white', 'white', 'white', 'green'];
  days = [];
  lastMonth_colspan = 0;
  selectedItem: any;
  constructor() { }

  getToday() {
    this.selectedDay = new Date();
    this.getDay();
  }

  getDay(addDMonth: number = 0) {
    let year = this.selectedDay.getFullYear();
    let month = this.selectedDay.getMonth() + addDMonth;
    const dt = new Date(year, month, 1);
    year = dt.getFullYear();
    month = dt.getMonth();

    const maxDay = new Date(year, month + 1, 0).getDate();
    const newDay = this.selectedDay.getDate();
    this.selectedDay = new Date(year, month, (newDay < maxDay) ? newDay : maxDay);
    const dayNumber = this.selectedDay.getDate();
    this.lastMonth_colspan = new Date(year, month, 1).getDay();
    const _days = [];
    for (let day = 1; day <= 31; day++) {
      const time = new Date(year, month, day);
      if (time.getMonth() > month) {
        break;
      }
      const isSelected = time.getDate() === dayNumber;
      const d: any = {
        isSelected: isSelected,
        datetime: time,
        day: day,
        week: time.getDay()
      };
      if (isSelected) {
        this.selectedItem = d;
      }
      _days.push(d);
    }
    this.days = [..._days];
    month++;
    // month為13時表示隔年的1月。
    if (month === 13) {
      month = 1;
      year++;
    }
    this.selectedMonth = `${year} 年 ${month} 月`;
    this.getNote();
  }

  selectdDay(item: any) {
    if (this.selectedItem) {
      this.selectedItem.isSelected = false;
    }
    item.isSelected = true;
    this.selectedItem = item;
    this.selectedDay = item.datetime;
  }

  getNote() {
    if (this.days.length > 0) {
      const d = Math.floor(Math.random() * 28);
      this.days.forEach(item => {
        const notes = [];
        if (item.week !== 0 && item.week !== 6) {
          if (item.week === 1) {
            notes.push({ type: 1, subject: '8:00 每周會議' });
          }
          let b = Math.random() >= 0.5;
          if (b) {
            notes.push({ type: 2, subject: 'XXX客戶拜訪' });
          }
          b = Math.random() >= 0.5;
          if (b) {
            notes.push({ type: 3, subject: '專案討論' });
          }
          if (item.day === d) {
            notes.push({ type: 4, subject: '部門聚餐' });
          }
        }
        item.notes = notes;
      });

    }
  }
}
