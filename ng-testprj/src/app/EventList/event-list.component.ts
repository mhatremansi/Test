import { Component } from '@angular/core';

@Component({
    selector: 'list-event-comp',
    templateUrl :'./event-list.component.html',
    styleUrls: ['./event-list.component.css']
    
})

export class EventListComponent{


    consts = [
        {name : 'Mansi', age: 101},
        {name : 'Shailesh'},
        {name : 'Komal'},
        {name : 'Madhu'},
        {name : 'Kaustubh', age:40}
    ]
    
    handleinParent(data){
        console.log(data);
        
    }
}