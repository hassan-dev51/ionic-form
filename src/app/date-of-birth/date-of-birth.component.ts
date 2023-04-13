import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { intervalToDuration } from 'date-fns';

@Component({
  selector: 'app-date-of-birth',
  templateUrl: './date-of-birth.component.html',
  styleUrls: ['./date-of-birth.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class DateOfBirthComponent {
  selectedDate: string = '';
  differenceInDays: any;
  formattedDuration: any;
  weeks: number = 0;
  days: number = 0;
  month: number = 0;
  year: number = 0;
  totalDays = 9000;
  constructor() {}

  // Define a function to calculate the difference in days
  calculate() {
    // Create Date objects for the current date and the selected date
    const currentDate = new Date();
    const selectedDate = new Date(this.selectedDate);

    // Calculate the difference in milliseconds between the two dates
    const differenceInMilliseconds: any =
      currentDate.getTime() - selectedDate.getTime();
    const totalDays = this.differenceInDays;
    console.log(totalDays);

    this.year = Math.floor(this.differenceInDays / 365);
    const remain = this.differenceInDays % 365;
    this.month = Math.floor(remain / 30);
    this.days = remain % 30;

    console.log(this.year, 'year', this.month, 'month', this.days, 'days');

    // Calculate the difference in days and store it in the component variable
    this.differenceInDays = Math.round(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
    // Calculate the difference in days, months, and weekss and store it in the component variable
    const duration = intervalToDuration({
      start: selectedDate,
      end: currentDate,
    });
    this.formattedDuration = {
      years: duration.years,
      months: duration.months,
      days: duration.days,
    };
  }

  ngOnInit() {}
}
