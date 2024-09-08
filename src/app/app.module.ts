import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeHomeComponent } from './pokehome/pokehome.component';
import { PokeNavbarComponent } from './pokenavbar/pokenavbar.component';

@NgModule({
  declarations: [AppComponent, PokeHomeComponent, PokeNavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
