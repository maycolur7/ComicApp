import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})


export class ResultadoComponent implements OnInit {

  heroeBuscado:any = {};

  constructor(private _heroesService:HeroesService, private activatedRoute:ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { 
      this.heroeBuscado = this._heroesService.buscarHeroe(params['termino']);
      console.log(this.heroeBuscado[0].nombre);
    })
 
  }

}
