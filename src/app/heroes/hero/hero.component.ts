import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
 
  public name:string = 'iroman';
  public age:number = 32;

  changeHero():void{
    this.name='Spiderman';
  }
  changeAge():void{
    this.age =43;
  }
  get capitalizacionName():string{
    return this.name.toUpperCase();
  }

   getHeroDescription():string{
    return `${this.name} - ${this.age} `;
  }

  resetForm():void{
    this.name='iroman';
    this.age = 32;
  }
}
