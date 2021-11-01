import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';


@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    IconsProviderModule
  ]
})
export class CourseModule { }
