import { Component, Input } from '@angular/core';
import { ThemeType } from '@ant-design/icons-angular';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css'],
})
export class PageTitleComponent {
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() theme: ThemeType = 'outline';
}
