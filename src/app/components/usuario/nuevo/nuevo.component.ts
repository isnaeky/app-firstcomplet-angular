import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: [
  ]
})
export class NuevoComponent implements OnInit {

  constructor(private ro: ActivatedRoute,private title: Title, private meta: Meta) {
    this.ro.parent.params.subscribe((a) => {
      console.log('Ruta Hija usuario nuevo');
      
      console.log(a);
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Usuario Nuevo');
  }

}
