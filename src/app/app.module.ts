import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';

// //PrimeNg
// import {ButtonModule} from 'primeng/button';
// import {CardModule} from 'primeng/card';

//ahora las importaciones de primefaces esta en mi modulo personalizado
//import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeEsPe from '@angular/common/locales/es-PE';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common'
registerLocaleData(localeEsPe);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,

    //ahora las importaciones de primefaces esta en mi modulo personalizado
    //PrimeNgModule
    // ButtonModule,
    // CardModule

    AppRouterModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-PE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
