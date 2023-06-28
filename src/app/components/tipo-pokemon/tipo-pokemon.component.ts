import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-pokemon',
  templateUrl: './tipo-pokemon.component.html',
  styleUrls: ['./tipo-pokemon.component.css']
})
export class TipoPokemonComponent implements OnInit {
  @Input() tipo: string | undefined ='';

  constructor() {

  }

  ngOnInit(): void {
  }

}
