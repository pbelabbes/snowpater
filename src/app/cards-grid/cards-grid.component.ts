import { Component, OnInit } from '@angular/core';
import { DICO } from 'src/assets/words-list';
import { WordCard } from '../models/wordCard';
import { Team } from '../models/Teams';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss']
})
export class CardsGridComponent implements OnInit {
  
  wordCards:WordCard[]=[];
  GRIDSIZE=25;
  TEAMSIZE=8;
  teams:Team[]=[];
  assassin:WordCard;

  
  constructor() { }
  
  ngOnInit() {
    
    this.initWords();
  }
  
  private initWords(){
    this.wordCards=[];
    const wordsStack = Object.assign([],DICO);
    for(let i = 0; i < this.GRIDSIZE; i++){
      const index = Math.floor(Math.random() * wordsStack.length);
      const word = wordsStack.splice(index,1)[0];
      this.wordCards.push(new WordCard(word));
    }

    // console.log(this.wordCards);
    this.initAnswerGrid();
  }

  refresh(){
    this.initWords();
  }

  private initAnswerGrid(){
    this.initTeams();

  }

  private initAssassin(grid:WordCard[]){
    const assassinIndex = (Math.floor(Math.random() * grid.length));
    this.assassin = this.wordCards[assassinIndex];
    this.assassin.color="black";
  }

  private initTeams(){
    if((Math.floor(Math.random() * 2)==1)){
      this.teams.push(new Team("RED"));
      this.teams.push(new Team("BLUE"));
    }else{
      this.teams.push(new Team("BLUE"));
      this.teams.push(new Team("RED"));
    }

    const grid = Object.assign([],this.wordCards);
    
    // Init first team
    for(let i = 0; i<this.TEAMSIZE+1;i++){
      const index = Math.floor(Math.random() * grid.length);
      this.addCardToTeam(this.teams[0],(grid.splice(index,1)[0]));
    }
    
    // Init second team
    for(let i = 0; i<this.TEAMSIZE;i++){
      const index = Math.floor(Math.random() * grid.length);
      this.addCardToTeam(this.teams[1],(grid.splice(index,1)[0]));
    }

    // Init Assassin
    this.initAssassin(grid);
  }


  private addCardToTeam(team:Team, wordCard:WordCard){
    team.wordCards.push(wordCard);
    wordCard.color=team.color;
  }
}
