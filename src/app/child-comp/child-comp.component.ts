import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent {
  @Output() sonChanged = new EventEmitter<boolean>();

  change(increasedMotherFucker) {
    this.sonChanged.emit(increasedMotherFucker);
  }


}
