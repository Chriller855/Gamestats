import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { MaterialModule } from './utils/material-module';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { UpcommingMathesComponent } from './upcommingMatches/upcomming-mathes.component';
import { TopBarComponent} from './topbar/topbar.component'
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoundComponent } from './round/round.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PlayerComponent,
    GameComponent,
    UpcommingMathesComponent,
    TopBarComponent,
    RoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', data: { title: 'Home' } },
      { path: 'player', component: PlayerComponent, data: { title: 'Players' } },
      { path: 'game', component: GameComponent, data: { title: 'Games' } },
    ]),
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  entryComponents: [RoundComponent],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router, title: Title) {
    router.events.subscribe((event) => { //fires on every URL change

      if (router.getCurrentNavigation()) {
        var myTitle = router.config[router.getCurrentNavigation().id].data.title
        title.setTitle(myTitle);
        console.log(myTitle)
      }

    });
  }

 
}
