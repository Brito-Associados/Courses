import { IconsProviderModule } from './../../icons-provider.module';
import { SharedModule } from './../../components/shared.module';
import { NgModule } from '@angular/core';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    StudentComponent
    ],
  imports: [
    StudentRoutingModule,
    SharedModule,
    NzTableModule,
    CommonModule,
    IconsProviderModule
    ]
})
export class StudentModule { }
