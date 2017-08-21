import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-editAll',
  templateUrl: 'app/editAll.component.html',
  styleUrls: ['app/editAll.component.css']
})
export class EditAllComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private _router: Router,
    private _heroService: HeroService) {
  }

  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0:));
  }
 
   goHome() {
    let link = ['Heroes'];
	this._router.navigate(link);
	alert('Hello ' + '!');
  }
  
  
  
  
}
