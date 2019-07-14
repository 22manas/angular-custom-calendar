import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
let momentContext;
if ("default" in moment) {
  momentContext = moment["default"];
  // momentContext().locale('fr-ch');
}


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  rows: number = 5;
  cols: number = 7;
  rowsA: number[] = new Array(5);
  colsA: number[] = new Array(7);
  days: Array<String> = [];
  dates: number = 0;
  months: Array<String> = [];
  constructor() { }

  ngOnInit() {
    this.dates = momentContext.daysInMonth();
    this.days = momentContext.weekdays(true);
    this.months = momentContext.months();
    this.lastDayOfMonth();
    console.log('->', this.dates, this.days, this.months, this.daysInMonth());
  }

  year = () => {
    return momentContext().format("Y");
  }
  month = () => {
    return momentContext().format("MMMM");
  }
  daysInMonth = () => {
    return momentContext().daysInMonth();
  }
  currentDate = () => {
    console.log("currentDate: ", momentContext.get("date"));
    return momentContext.get("date");
  }
  currentDay = () => {
    return momentContext.format("D");
  }

  firstDayOfMonth = () => {
    let dateContext = momentContext;
    let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
    return firstDay;
  }
  lastDayOfMonth = () => {
    let dateContext = momentContext;
    let lastDay = moment(dateContext).endOf('month').format('d'); // Day of week 0...1..5...6
    console.log({lastDay});
    return lastDay;
  }

  endPrintOnRow = () => {
    const lastCell = +this.firstDayOfMonth() + +this.daysInMonth();
    let row = 4;
    if(35 - lastCell > 6 ) {
      row = 3;
    }
    return row;
  }

}