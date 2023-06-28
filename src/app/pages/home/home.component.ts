import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/model/pokemon';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nextPage: string = '';
  prevPage: string ='';
  prev: string ='<';
  next: string = '>';
  inputBusca: string = '';
  pokemons: Pokemon[] = []; 

  constructor
  ( private pokemonApi: PokeApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.iniciarPokedex();
  }

  iniciarPokedex(): void {
    this.pokemonApi.buscarListaPokedex().subscribe(res => {
      this.nextPage = res.next;
      this.pokemons = res.results;
      this.pokedexDetalhes();
    } );
  }

  pokedexDetalhes(): void {
    this.pokemons.forEach(result => {
      this.pokemonApi.buscarNovaPag(result.url).subscribe(res => {
        result.weight = res.weight;
        result.height = res.height / 10;
        result.id = res.id
        result.imgBasic = res.sprites.other.dream_world.front_default;
      })
    });
  }

  mudarPaginaPokedex(page: string): void {
    if (!page) {
      return
    }
    this.pokemonApi.buscarNovaPag(page).subscribe(res => {
      this.nextPage = res.next;
      this.prevPage = res.previous;
      this.pokemons = res.results;
      this.pokedexDetalhes();
    });
  }

  busca(): void {
    console.log(this.inputBusca)
    this.inputBusca = this.inputBusca.toLowerCase();
    this.pokemonApi.detalhesPokemon(this.inputBusca).subscribe({
      next: res => {
        this.router.navigate(['detalhes/' + res.id.toString()]);
      },
      error: err => {
        console.log(err,'sucesso')
      },
    });
  }

  detalhesPokemon(id: string): void {
    this.router.navigate(['detalhes/' + id])
  }

}
