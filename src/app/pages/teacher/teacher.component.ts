import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() { }
  pageTitle: PageTitleComponent = {
    title: 'Professores',
    type: 'solution',
    theme: 'outline',
  };
  ngOnInit(): void {
  }

}
