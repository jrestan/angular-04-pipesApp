import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipesApp';
  
  mensaje: string = "Javier"

  onCambiarNombre(){
    this.mensaje = "Javier Restan Zegarra";
  }

  constructor(private primengConfig: PrimeNGConfig) {}
  
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
