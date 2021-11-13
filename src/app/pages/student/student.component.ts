import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
  pageTitle: PageTitleComponent = {
    title: 'Alunos',
    type: 'team',
    theme: 'outline',
  };
  ngOnInit(): void {
  }

}
