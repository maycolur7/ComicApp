
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component'
import { AboutComponent } from './app/components/about/about.component'
import { HeroesComponent } from './app/components/heroes/heroes.component'
import { HeroeComponent } from './app/components/heroe/heroe.component'
import { ResultadoComponent } from './app/components/resultado/resultado.component'


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'result/:termino', component: ResultadoComponent },
    { path: 'routePath', pathMatch: 'full', redirectTo: 'home' },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);