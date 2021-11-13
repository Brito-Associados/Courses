import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';

@NgModule({
  declarations: [
    TeacherComponent,
    PageTitleComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    IconsProviderModule]
})
export class TeacherModule {}
