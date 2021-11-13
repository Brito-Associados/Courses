import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  pageTitle: PageTitleComponent = {
    title: 'Turmas',
    type: 'calendar',
    theme: 'fill',
  };
  ngOnInit(): void {
  }

}
