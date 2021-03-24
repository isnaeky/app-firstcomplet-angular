import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit {
  constructor(private ro: ActivatedRoute) {
    this.ro.params.subscribe((a) => {
      console.log(a);
    });
  }

  ngOnInit(): void {
    
  }
}
