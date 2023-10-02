import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
public heroesName:string[]=['Spiderman','SheHulk','CapitanAmerica','Hulk'];
public deletehero?:string;

deletelastheroe():void{
 this.deletehero = this.heroesName.pop();
  

}


}
