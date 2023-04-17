import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class PrimeComponent implements OnInit {
  start: number = 0;
  end: number = 0;
  primes: number[] = [];
  constructor(private primeService: StudentService) {}
  findPrimes() {
    this.primes = this.primeService.getPrimeNumber(this.start, this.end);
    console.log(this.primes);
  }

  ngOnInit() {}
}
