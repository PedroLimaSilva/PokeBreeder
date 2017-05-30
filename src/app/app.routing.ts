import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InventoryPokemonComponent } from './pokemon/inventory-pokemon/inventory-pokemon.component';
import { PokedexComponent } from './pokemon/pokedex/pokedex.component';

import {AppComponent} from './app.component';

export const appRoutes: Routes = [
	{
		path: 'home',
		component: HomepageComponent,
		data: { title: 'Home' }
	},
	{
		path: 'welcome',
		component: WelcomeComponent
	},
	{
		path: 'inventory-pokemon',
		component: InventoryPokemonComponent,
		data: { title: 'Someone\'s PC' }
	},
	{
		path: 'pokedex',
		component: PokedexComponent,
		data: { title: 'Pokedex' }
	},
	{
		path: '',
		component: HomepageComponent
	},
	{ path: '**', component: HomepageComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
