import { Routes } from '@angular/router';
import { EnrollComponent } from './enroll/enroll.component';
import { EnrolledComponent } from './enrolled/enrolled.component';
import { EnrollUpdateComponent } from './enroll-update/enroll-update.component';
import { DateOfBirthComponent } from './date-of-birth/date-of-birth.component';
import { BillComponent } from './bill/bill.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home/enroll',
    component: EnrollComponent,
  },
  {
    path: 'home/enrolled',
    component: EnrolledComponent,
  },
  {
    path: 'home/enroll-updata/:id',
    component: EnrollUpdateComponent,
  },
  {
    path: 'home/date-of-birth',
    component: DateOfBirthComponent,
  },
  {
    path: 'home/bill',
    component: BillComponent,
  },
];
