import { Component, OnInit, Input } from '@angular/core';
import { PokeapiService } from '../../pokeapi.service';


@Component({
  selector: 'dex-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input() pokemon: any;

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {
    let cachedDex = JSON.parse(localStorage.getItem("POKEDEX"));
    let cachedValue = cachedDex.results.filter((e)=>this.pokemon.name == e.name);
    let url = this.pokemon.url;
    if( cachedValue[0].id ){
      this.pokemon = cachedValue[0];
      this.pokemon['url'] = url;
    }
    else{
      this.pokeapiService.getExtension(this.pokemon.url)
                        .subscribe(
                          data => {
                            this.pokemon['id'] = data.id;
                            this.pokemon['sprites'] = data.sprites;
                            console.log(this.pokemon);
                            cachedDex = JSON.parse(localStorage.getItem("POKEDEX"));
                            cachedDex.results[this.pokemon.id - 1] = this.pokemon;
                            localStorage.setItem("POKEDEX", JSON.stringify(cachedDex));
                          },
                          error => console.log(error),
                          () => {}
                        );
    }
    
  }

}
