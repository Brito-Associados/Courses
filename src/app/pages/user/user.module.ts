import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';


@NgModule({
  declarations: [
    UserComponent,
    PageTitleComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    IconsProviderModule
  ]
})
export class UserModule { }
