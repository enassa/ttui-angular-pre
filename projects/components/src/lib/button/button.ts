import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 't-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [ButtonComponent],
  providers: [],
  imports: [],
  exports: [ButtonComponent],
})
export class ButtonModule {}
