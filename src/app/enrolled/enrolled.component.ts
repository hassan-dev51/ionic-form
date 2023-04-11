import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { StudentService } from '../services/student.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class EnrolledComponent implements OnInit {
  enrolledStudents: undefined | any[];
  deleteMessage: string | undefined = '';
  constructor(private students: StudentService) {}

  ngOnInit() {
    this.students.getEnrollment().subscribe((student) => {
      this.enrolledStudents = student;
    });
  }
  deleteStudent(id: string) {
    this.students.deleteEnrollment(id).subscribe((student) => {
      if (student) {
        this.students.getEnrollment().subscribe((student) => {
          this.deleteMessage = 'Student deleted successfully';
          this.enrolledStudents = student;
        });
      }
      setTimeout(() => (this.deleteMessage = undefined), 3000);
    });
  }
  updateStudent(enrolledStudents: any) {
    this.students.updateEnrollment(enrolledStudents).subscribe((data) => {
      if (data) {
        this.enrolledStudents = data;
      }
    });
    console.log(enrolledStudents);
  }
}
