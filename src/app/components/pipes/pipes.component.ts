import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'
})
export class PipesComponent implements OnInit {
  nombre="Isai Trejo Matias";
  nombreT="iSAi trEjO MaTiAs";
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI:number=Math.PI;
  porcentaje=0.234;
  salario=1234.5;
  valorPromesa=new Promise<string>((resolve)=>{
    setTimeout(() => {
      resolve('Llego la data...!!!');
    }, 4500);
  });
  fecha:Date = new Date;

  heroe={
    nombre:"Logan",
    clave:"wolverine",
    edad:500,
    direccion:{
      calle:'Primera',
      casa:20
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
