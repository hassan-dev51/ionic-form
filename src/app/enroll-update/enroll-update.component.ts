import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enroll-update',
  templateUrl: './enroll-update.component.html',
  styleUrls: ['./enroll-update.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class EnrollUpdateComponent implements OnInit {
  isToastOpen = false;
  updateStudentArray: any;
  constructor(private student: StudentService, private route: ActivatedRoute) {}

  ngOnInit() {
    let studentId = this.route.snapshot.paramMap.get('id');
    console.log(studentId);

    studentId &&
      this.student.updateEnrollment(studentId).subscribe((student) => {
        this.updateStudentArray = student;
      });
  }
  UpdateStudent(data: any) {
    if (this.updateStudentArray) {
      data.id = this.updateStudentArray.id;
    }
    console.log(data);

    this.student.getUpdateEnrollment(data).subscribe((student) => {
      if (student) {
        this.isToastOpen = true;
      }
    });
  }
  customCounterFormatter(input: number, maxInput: number) {
    return `${maxInput - input} characters remaining`;
  }
}
