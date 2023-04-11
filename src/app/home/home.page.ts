import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private route: Router) {}
  enroll() {
    this.route.navigate(['home/enroll']);
  }
  enrolled() {
    this.route.navigate(['home/enrolled']);
  }
}
