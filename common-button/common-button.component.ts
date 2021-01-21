import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonButtonFactory, CommonButtonModel } from './shared/common-button.factory';
import { CommonButtonThemeEnum } from './shared/common-button.interface';

@Component({
  selector: 'ieat-common-button',
  templateUrl: 'common-button.component.html'
})
export class CommonButtonComponent implements OnInit {

  @Input() buttonModel: CommonButtonModel = CommonButtonFactory.getDefault();

  @Output() clickEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onButtonClick(button: CommonButtonModel): void {
    if (!button) { return; }
    this.clickEmitter.emit(button);
  }

  configureButtonTheme(button: CommonButtonModel): string {
    if (!button) { return 'bg-pink'; }
    switch (button.theme) {
      case CommonButtonThemeEnum.PRIMARY:
        return 'bg-pink';
      case CommonButtonThemeEnum.SECONDARY:
        return 'bg-pink-secondary';
      case CommonButtonThemeEnum.WARNING:
        return 'bg-pink-warning';
      case CommonButtonThemeEnum.DANGER:
        return 'bg-pink-danger';
      default:
        return 'bg-pink';
    }
  }

}
