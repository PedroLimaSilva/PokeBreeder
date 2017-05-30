import { Component, OnInit, trigger, transition, style, animate, state } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import {INVENTORY} from '../shared/pokemon.inventory';
import {PokemonService} from '../pokemon.service';


@Component({
  selector: 'inventory-pokemon',
  templateUrl: './inventory-pokemon.component.html',
  styleUrls: ['./inventory-pokemon.component.css'],
  providers: [DecimalPipe]
})
export class InventoryPokemonComponent implements OnInit {

  selected: any;
  pokemon_list: Array<any>;

  constructor(
    private pokebreederService: PokemonService,
    private numberPipe: DecimalPipe
  ) {}

  ngOnInit() {
    this.pokebreederService.getPokemon()
                           .subscribe(
                             data => this.pokemon_list = data,
                             error => console.log(error),
                             () => {
                               console.log(this.pokemon_list);
                               for(let pokemon of this.pokemon_list){
                                 pokemon['sprite'] = this.pokebreederService.getSprite(this.numberPipe.transform(pokemon.dex, '3.0-0'));
                               }
                             }
                           );
  }

  showDetail(){
    return this.selected != null;
  }
  hideDetail(){
    this.selected = null;
  }
  
  selectPokemon(pokemon){
    this.selected=pokemon;
  }

}
