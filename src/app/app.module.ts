import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import 'gsap';
import { PokeapiService } from './pokemon/pokeapi.service';
import { PokemonService } from './pokemon/pokemon.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuComponent } from './nav-bar/menu/menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InventoryPokemonComponent } from './pokemon/inventory-pokemon/inventory-pokemon.component';
import { PokemonItemComponent } from './pokemon/inventory-pokemon/pokemon-item/pokemon-item.component';
import { PokedexComponent } from './pokemon/pokedex/pokedex.component';
import { EntryComponent } from './pokemon/pokedex/entry/entry.component';
import { EggClickerComponent } from './pokemon/egg-clicker/egg-clicker.component';
import { PokemonDetailComponent } from './pokemon/inventory-pokemon/pokemon-detail/pokemon-detail.component';

/** Map relative paths to URLs. */
const map: any = {
  'gsap': 'vendor/gsap/src/minified/' // this tells to system.js loader: Hey when you see: "import 'gsap'" in any of my project files, you should load it form: vendor/gsap blah blah..
};

/** User packages configuration. */
const packages: any = {
  gsap: {
    defaultExtension: 'js',
    main: 'TweenMax.min.js' // the entry point for the gsap package.
  }
};
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavBarComponent,
    MenuComponent,
    HomepageComponent,
    InventoryPokemonComponent,
    PokemonItemComponent,
    PokedexComponent,
    EntryComponent,
    EggClickerComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PokeapiService, PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
