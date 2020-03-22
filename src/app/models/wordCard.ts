export class WordCard{
    static IDCOUNT = 0;
    id:number;
    color:string;
    word:string;

    constructor(word:string){
        this.id = WordCard.IDCOUNT++;
        this.color="white";
        this.word = word;
    }
}