import { Component, OnInit, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { PokeapiService } from '../../pokeapi.service';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css'],
  providers: [DecimalPipe]
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon: any;

  public sprite: string; 

  constructor(
    private numberPipe: DecimalPipe,
    private pokeapiService: PokeapiService,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    if(!this.pokemon["name"]){
      let cachedDex = JSON.parse(localStorage.getItem("POKEDEX"));
      cachedDex = cachedDex.results;
      let cachedMon = cachedDex.filter(
                                  (e)=>{
                                    return this.pokemon['dex'] == e.id;
                                  }
                                );
      this.pokemon = cachedMon[0];
    }
    this.sprite = this.pokemonService.getSprite(this.numberPipe.transform(this.pokemon.id,'3.0-0'));
  }

}
