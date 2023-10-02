import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    
        <h1>{{title}}</h1>

        <hr>
        <h1>Counter : {{counter}}</h1>

        <button (click)="increaseBy(+1)">+1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>
       
    `
})

export class CounterComponent {
    public title:string = 'Mi primera App';

    public counter:number=10;
  
    increaseBy(value:number):void{
      this.counter +=value;
    }
  
    reset():void{
      this.counter = 10;
    }
}