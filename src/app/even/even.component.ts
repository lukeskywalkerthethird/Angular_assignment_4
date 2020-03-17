import {  Component, 
          OnInit, 
          Input,
          OnChanges,
          SimpleChanges 
        } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {
  @Input() tCounter: number;
  @Input() state:string;

  evenValues = [];
  constructor() { }

  ngOnInit(): void { 
  }

  ngOnChanges(){
    if(this.tCounter%2 == 0){
      if(!this.evenValues.includes(this.tCounter)){
        this.evenValues.push(this.tCounter);
      }
    }
  }

}
