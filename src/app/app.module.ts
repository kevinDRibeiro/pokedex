import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesPokemonComponent } from './pages/detalhes-pokemon/detalhes-pokemon.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TipoPokemonComponent } from './components/tipo-pokemon/tipo-pokemon.component';
import { StatsBarComponent } from './components/stats-bar/stats-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalhesPokemonComponent,
    PokemonCardComponent,
    TipoPokemonComponent,
    StatsBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
