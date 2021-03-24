import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:any[]=[];
  heroe:any[]=[];

  constructor( private _heroesService:HeroesService , private router:Router) {}

  ngOnInit(): void {
  this.heroes=this._heroesService.getHeroes();
  //console.log(this.heroes);
  }
  verHeroe(id:number){
    this.router.navigate(['/heroe',id]);
  
  }

}
