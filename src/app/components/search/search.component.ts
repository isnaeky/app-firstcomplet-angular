import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroe:any={};
  termino:String;
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService , private router:Router) {
    this.activatedRoute.params.subscribe( params => {
      this.termino=params.id;
      this.heroe= _heroesService.buscarHeroes(this.termino);
      console.log(this.heroe);
    });
   }

  ngOnInit(): void {
  }

  verHeroe(id:number){
    this.router.navigate(['/heroe',id]);
  
  }
}
