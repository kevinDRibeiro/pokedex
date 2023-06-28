import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  apiRoute: string = 'https://pokeapi.co/api/v2/pokemon/';
  charRoute: string = 'https://pokeapi.co/api/v2/characteristic/'

  constructor( private http: HttpClient) { }

  detalhesPokemon(pokemon: string): Observable<any> {
    return this.http.get(this.apiRoute.concat(pokemon));
  }

  detalhesPokemonPag(pokemon: string): Observable<any> {
    return this.http.get(this.charRoute.concat(pokemon));
  }

  buscarListaPokedex(): Observable<any> {
    return this.http.get(this.apiRoute.concat('?limit=10'));
  }

  buscarNovaPag(nextPage: string): Observable<any> {
    return this.http.get(nextPage);
  }
}
