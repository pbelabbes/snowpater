import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Team } from 'src/app/models/Teams';

@Component({
  selector: 'app-actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.scss']
})
export class ActionsBarComponent implements OnInit {

  @Output() refreshed = new EventEmitter();
  private _currentTeam:Team;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set currentTeam(team:Team){
    this._currentTeam = team;
  }

  get currentTeam():Team{
    return this._currentTeam;
  }

  public refreshGrid(){
    this.refreshed.emit();
  }

}
