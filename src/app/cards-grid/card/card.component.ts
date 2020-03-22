import { Component, OnInit, Input } from '@angular/core';
import { WordCard } from 'src/app/models/wordCard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() wordCard:WordCard;
  
  constructor() { }

  ngOnInit() {
  }

}
