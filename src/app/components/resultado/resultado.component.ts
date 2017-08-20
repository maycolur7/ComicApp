import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})


export class ResultadoComponent implements OnInit {

  heroeBuscado:any = [];
  termino:string;

  constructor(private _heroesService:HeroesService, private activatedRoute:ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino']; 
      this.heroeBuscado = this._heroesService.buscarHeroe(params['termino']);       
    })
 
  }

}
