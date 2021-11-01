import { NgModule } from '@angular/core';
import { IconsProviderModule } from 'src/app/icons-provider.module';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    IconsProviderModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
