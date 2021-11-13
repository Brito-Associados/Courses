import { SharedModule } from './../../components/shared.module';
import { NgModule } from '@angular/core';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';


@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    TeacherRoutingModule,
    SharedModule
  ]
})
export class TeacherModule {}
