import { Component, OnInit, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { PokemonService, USER_ID } from '../pokemon.service';

export const EGG_SPRITE_WIDTH = 26;
export const EGG_SPRITE_HEIGHT = 26;

@Component({
  selector: 'egg-clicker',
  templateUrl: './egg-clicker.component.html',
  styleUrls: ['./egg-clicker.component.css'],
  providers: [DecimalPipe]
})
export class EggClickerComponent implements OnInit {
  @Input() egg;

  hatched=false;
  style={};
  hatched_sprite;
  
  constructor( 
    private numberPipe: DecimalPipe,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.style['background-position-x'] = -this.egg.sprite[0]*EGG_SPRITE_WIDTH + 'px';
    this.style['background-position-y'] = -this.egg.sprite[1]*EGG_SPRITE_HEIGHT + 'px';
    this.hatched_sprite = "assets/img/sprites/pokemon/" + this.numberPipe.transform(this.egg.dex,'3.0-0') + "/" + this.numberPipe.transform(this.egg.dex,'3.0-0') + ".gif";
  }

  clickEgg(clicks: number){
    if(this.egg.clicks-clicks>0){
      this.egg.clicks -= clicks;
    } else if (!this.hatched) {
      this.egg.clicks = 0;
      this.hatched = true;
      this.pokemonService.hatchEgg(this.egg.id, this.egg.dex, this.egg.ownerID);
    }
  }
}
