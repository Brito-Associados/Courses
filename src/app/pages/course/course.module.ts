import { SharedModule } from './../../components/shared.module';
import { NgModule } from '@angular/core';
import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CourseRoutingModule,
    SharedModule
  ]
})
export class CourseModule { }
