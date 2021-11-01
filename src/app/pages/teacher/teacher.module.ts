import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';


@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    IconsProviderModule
  ]
})
export class TeacherModule { }
