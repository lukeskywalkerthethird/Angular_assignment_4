import {  Component,
          OnInit, 
          Input,
          OnChanges,
          SimpleChanges
         } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {
  @Input() tCounter: number;
  @Input() state:string;
  trial;

  oddValues = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    this.trial = this.tCounter*2;
    if(this.tCounter%2 != 0){
      if(!this.oddValues.includes(this.tCounter)){
        this.oddValues.push(this.tCounter)
      }
    }
  }



}
