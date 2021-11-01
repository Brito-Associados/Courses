import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialComponent } from './financial.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';


@NgModule({
  declarations: [
    FinancialComponent
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule,
    IconsProviderModule
  ]
})
export class FinancialModule { }
