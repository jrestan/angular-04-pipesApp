import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

// //PrimeNg
// import {ButtonModule} from 'primeng/button';
// import {CardModule} from 'primeng/card';

//ahora las importaciones de primefaces esta en mi modulo personalizado
//import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,

    //ahora las importaciones de primefaces esta en mi modulo personalizado
    //PrimeNgModule
    // ButtonModule,
    // CardModule

    AppRouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
