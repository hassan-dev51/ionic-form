import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class EnrollComponent implements OnInit {
  isToastOpen = false;
  name: string = '';
  cnicNumber: string = '';
  sectionValue: string = '';
  fatherName: string = '';
  cnicError: string = '';
  constructor(public enrollService: StudentService, public route: Router) {}

  ngOnInit() {}
  onCnicInput(event: any) {
    this.cnicNumber = event.target.value.replace(/[^0-9]/g, '');
  }
  enrollStudent(data: any) {
    this.enrollService.enrollment(data).subscribe((result) => {
      if (result) {
        if (!/^[a-zA-Z ]*$/.test(this.name)) {
          // Show an error message to the user
          alert('Name can only contain alphabets');
          return;
        }
        // if (this.cnicNumber.length !== 13) {
        //   // Show an error message to the user
        //   this.cnicError = 'CNIC should be 13 digits';
        //   return;
        // }

        this.isToastOpen = true;
        setTimeout(() => this.route.navigate(['home/enrolled']), 3000);
      } else {
        console.log('Student failed');
      }
    });

    console.log(data);
  }
}
