import { SharedModule } from './../../components/shared.module';
import { NgModule } from '@angular/core';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';

@NgModule({
  declarations: [
    StudentComponent
    ],
  imports: [
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
