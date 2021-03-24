import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html'
})
export class TarjetaHeroeComponent implements OnInit {
@Input() heroes:any={};
@Input() index:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  verHeroe(){
    this.router.navigate(['/heroe',this.index]);
  }
}
