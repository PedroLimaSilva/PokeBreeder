import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokedex: any;

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {
    let cachedValue = JSON.parse(localStorage.getItem("POKEDEX"));
    if( cachedValue ){
      this.pokedex = cachedValue['results'];
      console.log("got cached pokedex")
    }
    else{
      this.pokeapiService.getPokedex(151)
                       .subscribe(
                         data => {
                           this.pokedex = data.results;
                           localStorage.setItem("POKEDEX", JSON.stringify(data));
                         },
                         error => console.log(error),
                         () => { }
                       );
    }
  }

}
