import {  Component, 
          OnInit, 
          OnChanges, 
          SimpleChanges
        } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements   
  OnInit,
  OnChanges{

  counter: number = 1;
  t;
  game = "";
  disableStartButton = false;
  constructor(){ } 
  ngOnChanges(change: SimpleChanges){
  }
  ngOnInit(): void {
  }
  startGame(){
    this.t= setInterval(()=>{
      this.counter++;
    },10);
  }
  endGame(){
    this.game = "gameOver";
    this.disableStartButton = true;
    clearTimeout(this.t);
    this.counter = 1;
  }

}
