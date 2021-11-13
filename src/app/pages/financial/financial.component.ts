import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {
  pageTitle: PageTitleComponent = {
    title: 'Financeiro',
    type: 'dollar-circle',
    theme: 'fill',
  };

  ngOnInit(): void {
  }

}
