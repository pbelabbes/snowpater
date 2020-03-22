import { Component, OnInit } from '@angular/core';
import { DICO } from 'src/assets/words-list';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss']
})
export class CardsGridComponent implements OnInit {
  
  words:string[]=[];
  GRIDSIZE=25;
  
  constructor() { }
  
  ngOnInit() {
    
    this.initWords();
  }
  
  private initWords(){
    this.words=[];
    const wordsStack = Object.assign([],DICO);
    for(let i = 0; i < this.GRIDSIZE; i++){
      const index = Math.floor(Math.random() * wordsStack.length);
      const word = wordsStack.splice(index,1)[0];
      this.words.push(word);
    }
  }

  refresh(){
    this.initWords();
  }
}
