import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService } from './hero.service';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import {EditAllComponent} from './editAll.component';

@Component({
  selector: 'my-app',
  template: `
    
  <div class="body">
   <div class="head">
	<a [routerLink]="['Dashboard']"><h1>{{title}}</h1></a>	
	
	
	
	</div>
	<div class="head_right">
	<a [routerLink]="['Dashboard']"><h3>{{slogan}}</h3></a>
	</div>
	<p></p>
    <nav>
	
      <a [routerLink]="['Dashboard']">Home</a>
	  <a [routerLink]="['Heroes']">Information/heroes ( in app.component.ts )</a>	  
	  <a [routerLink]="['Heroes']">Catalog/heroes( in app.component.ts )</a> 	  
	  <a [routerLink]="['EditAll']">Contact Us/editall( in app.component.ts )</a>       <!--       comment in html -->
	</nav>
	<router-outlet> <a class="imgs" [routerLink]="['Heroes']"><img src=" /image/air.jpg" alt="Air" style="width:150px; height:150px;"/> </a>
	<a class="imgs" [routerLink]="['Dashboard']"><img src="/image/fire.png " alt="Air" style="width:150px; height:150px;"/> </a> </router-outlet>	

	
  <div class="img">
  <br>	
  <br>
  <br>
  <br>
  
  
  <a class="imgs" [routerLink]="['Heroes']"><img src=" /image/air.jpg" alt="Air" style="padding:3px; border-radius: 20px;width:304px; height:228px; position:relative;"/> </a>
  <a class="imgs" [routerLink]="['EditAll']"> <img src=" /image/Airbus.jpg" alt="Air" style="padding:3px; border-radius: 20px;width:304px; height:228px; position:relative;"/> </a>
  <a class="imgs" [routerLink]="['Heroes']"><img src=" /image/chilepan.jpg" alt="Air" style="padding:3px; border-radius: 20px;width:304px; height:228px; position:relative;"/> </a>
  <a class="imgs" [routerLink]="['EditAll']"><img src=" /image/coolwater.jpg" alt="Air" style="padding:3px; border-radius: 20px;width:304px; height:228px; position:relative;"/> </a>
  <a class="imgs" [routerLink]="['EditAll']"><img src=" /image/earth.jpg" alt="Air" style="padding:3px; border-radius: 20px;width:304px; height:228px; position:relative;"/> </a>
  <a class="imgs" [routerLink]="['Heroes']"><img src=" /image/earth.jpeg" alt="Air" style="padding:3px; border-radius: 20px;width:304px; height:228px; position:relative;"/> </a>

  <a class="imgs" [routerLink]="['EditAll']"><img src=" /image/fire.png" alt="Air" style="padding:3px; border-radius: 20px;width:304px; height:228px; position:relative;"/> </a>
  <a class="imgs" [routerLink]="['Dashboard']"><img src=" /image/avatar.jpg" alt="Air" style="padding:3px; border-radius: 20px;width:304px; height:228px; position:relative;"/> </a>
  <a class="imgs" [routerLink]="['Heroes']"><img src=" /image/mountain.jpg" alt="Air" style="padding:3px; border-radius: 20px;width:304px; height:228px; position:relative;"/> </a>
  <a class="imgs" [routerLink]="['Dashboard']"> <img src=" /image/mwskyglow.jpg" alt="Air" style="padding:3px; border-radius: 20px;width:304px; height:228px; position:relative;"/> </a>
  <a class="imgs" [routerLink]="['Heroes']"><img src=" /image/outside.jpg" alt="Air" style="padding:3px; border-radius: 20px;width:304px; height:228px; position:relative;"/> </a>
  <a class="imgs" [routerLink]="['Dashboard']"> <img src=" /image/wind2.jpg" alt="Air" style=" padding:3px; border-radius: 20px; width:304px; height:228px; position:relative;"/> </a>
</div>


	</div>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]
  
})



@RouteConfig([

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
	path: '/editAll',
    name: 'EditAll',
    component: EditAllComponent
  } 
]



)

export class AppComponent {
  title = 'Fifty-Fifty',
  slogan= 'Buy, Sell, Trade';
}




