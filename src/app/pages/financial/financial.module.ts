import { SharedModule } from './../../components/shared.module';
import { NgModule } from '@angular/core';
import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialComponent } from './financial.component';

@NgModule({
  declarations: [
    FinancialComponent
  ],
  imports: [
    FinancialRoutingModule,
    SharedModule
  ]
})
export class FinancialModule { }
