import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(public http: HttpClient) {}

  enrollment(data: any) {
    return this.http.post('http://localhost:3000/students', data);
  }
  getEnrollment() {
    return this.http.get<any>('http://localhost:3000/students');
  }
  deleteEnrollment(id: any) {
    return this.http.delete(`http://localhost:3000/students/${id}`);
  }
  updateEnrollment(id: any) {
    return this.http.get<any>(`http://localhost:3000/students/${id}`);
  }
  getUpdateEnrollment(data: any) {
    console.log(data, 'update data');
    return this.http.put(`http://localhost:3000/students/${data.id}`, data);
  }
  getPrimeNumber(start: number, end: number): number[] {
    const primes: number[] = [];
    for (let i = start; i <= end; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime && i > 1) {
        primes.push(i);
      }
    }
    return primes;
  }
}
