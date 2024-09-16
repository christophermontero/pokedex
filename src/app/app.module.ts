import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeHomeComponent } from './components/pokehome/pokehome.component';
import { PokeNavbarComponent } from './components/pokenavbar/pokenavbar.component';
import { PokeCardComponent } from './components/pokecard/pokecard.component';

@NgModule({
  declarations: [AppComponent, PokeHomeComponent, PokeNavbarComponent, PokeCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
