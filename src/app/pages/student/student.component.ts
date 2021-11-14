import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  dataSet: Data[];
  isLoadingTable: boolean = true;
  listOfColumns: ColumnItem[] = [
    {
      sortOrder: null,
      sortFn: (a: Data, b: Data) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
    },
  ];
  constructor() {
    this.dataSet = [
      {
        name: 'Teste3 Testerson',
        cell: '(81) 9 9999-9999',
        email: 'teste1@teste.com',
        id: '1',
      },
      {
        name: 'Teste2 Testerson',
        cell: '(81) 9 8888-8888',
        email: 'teste2@teste.com',
        id: '2',
      },
      {
        name: 'Teste1 Testerson',
        cell: '(81) 9 7777-7777',
        email: 'teste3@teste.com',
        id: '3',
      },
    ];
  }
  pageTitle: PageTitleComponent = {
    title: 'Alunos',
    type: 'team',
    theme: 'outline',
  };

  ngOnInit(): void {
    this.isLoadingTable = false;
  }

  detail(data: Data): void {
    console.log('click', data.name);
  }
}

export type Data = {
  name: string;
  cell: string;
  email: string;
  id: string;
};
interface ColumnItem {
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<Data> | null;
  sortDirections: NzTableSortOrder[];
}
