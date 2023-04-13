import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class BillComponent implements OnInit {
  consumedUnits: any = null;
  totalbill: number = 0;
  fiftyUnits: number = 0;
  constructor() {}
  submit(unit: number) {
    const fiftyUnits = Math.min(50, unit) * 30;
    const upToHundred = Math.max(0, Math.min(50, unit - 50)) * 40;
    const upToHundredFifty = Math.max(0, Math.min(100, unit - 100)) * 50;
    const upToTwoHundred = Math.max(0, unit - 200) * 70;

    this.totalbill =
      fiftyUnits + upToHundred + upToHundredFifty + upToTwoHundred;
  }
  ngOnInit() {}
}

// const fiftyUnits = Math.min(50, unit) * 30; // calculate the cost for the first 50 units at a rate of 30 per unit

// const upToHundred = Math.max(0, Math.min(50, unit - 50)) * 40;
// calculate the cost for the units between 50 and 100 at a rate of 40 per unit
// To do this, we need to find the number of units between 50 and the input value. We do this by subtracting 50 from the input value.
// However, we need to make sure that the result of this subtraction is no more than 50. We do this by taking the minimum of the result and 50 using Math.min().
// We then multiply this result by 40 to calculate the cost of the units between 50 and 100.

// const upToHundredFifty = Math.max(0, unit - 100) * 50;
// calculate the cost for the units above 100 at a rate of 50 per unit
// To do this, we need to find the number of units above 100. We do this by subtracting 100 from the input value.
// However, we need to make sure that the result of this subtraction is no less than 0. We do this by taking the maximum of the result and 0 using Math.max().
// We then multiply this result by 50 to calculate the cost of the units above 100.

// this.totalbill = fiftyUnits + upToHundred + upToHundredFifty; // calculate the total bill by summing up the costs for the first 50 units, the units between 50 and 100, and the units above 100.
