import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/student' },
  { path: 'course', loadChildren: () => import('./pages/course/course.module').then(m => m.CourseModule) },
  { path: 'financial', loadChildren: () => import('./pages/financial/financial.module').then(m => m.FinancialModule) },
  { path: 'class', loadChildren: () => import('./pages/class/class.module').then(m => m.ClassModule) },
  { path: 'teacher', loadChildren: () => import('./pages/teacher/teacher.module').then(m => m.TeacherModule) },
  { path: 'student', loadChildren: () => import('./pages/student/student.module').then(m => m.StudentModule) },
  { path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
