import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.scss']
})
export class ActionsBarComponent implements OnInit {

  @Output() refreshed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public refreshGrid(){
    this.refreshed.emit();
  }

}
