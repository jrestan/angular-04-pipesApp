import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre: string = "Susan";
  genero: string = "femenino";

  miMapa = {
    masculino: "invitarlo",
    femenino: "invitarla"
  }


  clientes: string[] = ["Maria", "Juan", "Pedro", "Luis"];

  clienteMapa = {
    "=0": "no tenemos nigun cliente",
    "=1": "tenemos un cliente",
    "other": "tenemos # clientes"
  }

  cambiarPersona(){
    this.nombre = "Javier";
    this.genero = "masculino";
  }

  quitarPersona(){
    this.clientes.pop();
  }


  persona = {
    nombre: "Javier restan zegarra",
    edad: "40",
    direccion: "calle h 113"
  };



  miObservable = interval(1000);

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    },3500);
  });

  constructor() { }

  ngOnInit(): void {
  }

}
