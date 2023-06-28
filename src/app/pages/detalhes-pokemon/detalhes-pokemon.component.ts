import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/model/pokemon';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-detalhes-pokemon',
  templateUrl: './detalhes-pokemon.component.html',
  styleUrls: ['./detalhes-pokemon.component.css']
})
export class DetalhesPokemonComponent implements OnInit {
  pokemonRoute: string | null = '';
  pokemon: Pokemon = {
    name: '',
    url: '',
    id: '',
    type: '',
    health: 0,
    defense: 0,
    speed: 0,
    atack: 0,
  };

  constructor( 
    private _activatedRoute: ActivatedRoute,
    private pokemonApi: PokeApiService,
    private router: Router) {
    this.pokemonRoute = this._activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.detalhesPokemon();
  }

  home(): void {
    this.router.navigate([''])
  }
  
  detalhesPokemon(): void {
    const pokemonRoute: string = this.pokemonRoute? this.pokemonRoute : '';
    this.pokemonApi.detalhesPokemon(pokemonRoute).subscribe({
      next: res => {
        this.pokemon.name = res.name;
        this.pokemon.id = pokemonRoute;
        this.pokemon.type = res.types[0].type.name;
        this.pokemon.height = res.height / 10;
        this.pokemon.weight = res.weight;
        this.pokemon.imgBasic = res.sprites.other.dream_world.front_default;
        this.pokemon.health = res.stats[0].base_stat;
        this.pokemon.defense = res.stats[2].base_stat;
        this.pokemon.speed = res.stats[5].base_stat;
        this.pokemon.atack = res.stats[1].base_stat;
        console.log(res, this.pokemon)
      },
      error: err => {
        this.router.navigate(['']);
      }
    });

    this.pokemonApi.detalhesPokemonPag(pokemonRoute).subscribe({
      next: res => {
        this.pokemon.description = res.descriptions[7].description;
      },
    })
  }

}
