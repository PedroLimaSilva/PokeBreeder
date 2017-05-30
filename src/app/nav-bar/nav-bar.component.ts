import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

import {appRoutes} from '../app.routing';

declare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;
import "gsap";
// declare var TimelineMax:any;
// const TimelineMax = require('gsap').TimelineMax;


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  publicRoutes = appRoutes;
  private parentRouter: Router;
	vis: boolean;
	// parentRouter = this.parentRouter;
	// console.log(parentRouter);
  constructor() {
  }
}
