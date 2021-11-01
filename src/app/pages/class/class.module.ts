import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassComponent } from './class.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';


@NgModule({
  declarations: [
    ClassComponent
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    IconsProviderModule
  ]
})
export class ClassModule { }
