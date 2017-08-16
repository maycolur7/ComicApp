import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from '../app.routes'

// Services
import { HeroesService } from '../app/services/heroes.service'

// Components 
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/share/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
      BrowserModule,
      APP_ROUTING
  ],
  providers: [
      HeroesService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
