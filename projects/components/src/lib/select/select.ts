import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'ttui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
@NgModule({
  declarations: [SelectComponent],
  providers: [],
  imports: [],
  exports: [SelectComponent],
})
export class SelectModule {}
