import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTransazioniComponent } from './components/lista-transazioni/lista-transazioni.component';
import { SingolaTransazioneComponent } from './components/singola-transazione/singola-transazione.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTransazioniComponent,
    SingolaTransazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
