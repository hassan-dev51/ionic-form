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
  consumedUnits: any = '';
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
