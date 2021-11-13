import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  pageTitle: PageTitleComponent = {
    title: 'Cursos',
    type: 'table',
    theme: 'outline',
  };

  ngOnInit(): void {
  }

}
