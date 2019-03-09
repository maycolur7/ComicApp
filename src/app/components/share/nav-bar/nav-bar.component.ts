import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string, $event: Event) {
    $event.preventDefault();
    if(termino) {
      this.router.navigate(['result', termino]);
    } else {
      this.router.navigate(['heroes']);
    }
  }


}
