import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() event: any; //Getting data from Parent to Child
  @Output() output= new EventEmitter();

  childVariable  = "Child Variable";

  constructor() { }

  ngOnInit(): void {
    
  }

  display(){
    console.log("Hello Shailu!");
    
  }

  handleClickMe(){
    this.output.emit("On Click Danger!!");
  }

  checkAge(){
    if(! this.event.age)
      return {color: 'red', 'font-weight' : 'bold'};
      return {color: 'pink'};
  }

}
