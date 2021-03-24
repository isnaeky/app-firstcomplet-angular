import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {
heroe:any={};

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) { 
    this.activatedRoute.params.subscribe( params => {
    this.heroe= _heroesService.getHeroe(params.id);
    console.log(this.heroe);
} )

  }

  ngOnInit(): void {
  }

}
