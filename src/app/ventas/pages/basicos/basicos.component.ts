import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower = "javier";
  nombreCompleto = "javier restan zegarra";

  fecha: Date = new Date(); //el dia de hoy

  

}
