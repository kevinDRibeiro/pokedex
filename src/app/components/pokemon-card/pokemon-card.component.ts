import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() name!: string;
  @Input() id!: string;
  @Input() imgUrl!: string | undefined;
  @Input() height!: number | undefined;
  @Input() weigth!: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
