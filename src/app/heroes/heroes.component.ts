import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroesService } from '../heroes.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes : Hero[] = [];

  constructor(private heroesService : HeroesService, 
    private messageService : MessageService ) { }

  ngOnInit(): void {

    this.getHeroes();
  }

  getHeroes() : void {
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}