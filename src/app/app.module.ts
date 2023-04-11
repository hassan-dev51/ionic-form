import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule, // add HttpClientModule to the imports array
  ],
  providers: [StudentService],
})
export class AppModule {}
