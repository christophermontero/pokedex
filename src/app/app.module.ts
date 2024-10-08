import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeEntryComponent } from './components/poke-entry/poke-entry.component';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokeNavbarComponent } from './components/poke-navbar/poke-navbar.component';
import { PokeStatsComponent } from './components/poke-stats/poke-stats.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeHomeComponent,
    PokeNavbarComponent,
    PokeCardComponent,
    PokeEntryComponent,
    PokeStatsComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
