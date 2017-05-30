import { Component, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
import { PokeapiService } from '../../pokeapi.service';
import { PokemonService } from '../../pokemon.service';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
  providers: [DecimalPipe]
})
export class PokemonDetailComponent implements AfterViewInit {
  @Input() show;
  @Input() pokemon; 
  @Output() dismiss=new EventEmitter();

  constructor(
    private pokeApiService: PokeapiService,
    private pokemonService: PokemonService,
    private numberPipe: DecimalPipe
  ) { }

  ngAfterViewInit() {
    
  }

  close(){
    this.dismiss.emit();
  }
}
