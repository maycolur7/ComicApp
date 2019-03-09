import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroes } from '../../services/heroes.service'


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styles: []
})
export class HeroesComponent implements OnInit {

    heroes: Heroes[];

    constructor(private _heroesService: HeroesService, private router: Router) {

    }

    ngOnInit() {
        this.heroes = this._heroesService.getHeroes();
    }

    verHeroe(idx: number) {
        this.router.navigate(['/heroe', idx]);
    }

}
