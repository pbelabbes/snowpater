import { WordCard } from './wordCard';

export class Team{
    name:"RED"|"BLUE";
    color:string;
    wordCards:WordCard[];
    guessCards:WordCard[];

    constructor(color:"RED"|"BLUE"){
        this.name=color;
        this.color=(color==="RED")?"#e74c3c":"#3498db";
        this.wordCards = [];
        this.guessCards =[];
    }
}