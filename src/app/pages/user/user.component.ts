import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor() {}
   pageTitle: PageTitleComponent = {
    title: 'Usuário',
    type: 'user',
    theme: 'outline',
  };

  ngOnInit(): void {}
}
