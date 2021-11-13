import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from '../icons-provider.module';

@NgModule({
  imports: [
    CommonModule,
    IconsProviderModule
  ],
  declarations: [
    PageTitleComponent
  ],
  exports:[
    PageTitleComponent,

  ]
})
export class SharedModule { }
