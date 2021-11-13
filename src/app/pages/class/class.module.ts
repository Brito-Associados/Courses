import { SharedModule } from './../../components/shared.module';
import { NgModule } from '@angular/core';
import { ClassRoutingModule } from './class-routing.module';
import { ClassComponent } from './class.component';
@NgModule({
  declarations: [
    ClassComponent
  ],
  imports: [
    ClassRoutingModule,
    SharedModule
  ]
})
export class ClassModule { }
