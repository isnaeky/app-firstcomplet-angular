import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styles: [],
})
export class DirectiveComponent implements OnInit {
  ngSt: boolean = true;
  cls: String = 'alert-danger';
  vari: number = 0;
  propied: any = {
    danger: true,
  };

  ban: boolean = false;
  cl: string = 'fa-save';
  txt:string= 'Guardar Cambios';
  aun: number = 50;
  constructor() {}

  ngOnInit(): void {}

  procesoAs() {
    this.ban = true;
    this.cl = 'fa-refresh fa-spin';
    this.txt='Guardando...'
    setTimeout(() => {
      this.ban = false;
      this.cl = 'fa-save';
      this.txt = 'Guardar Cambios';
    }, 4000);
  }
}
