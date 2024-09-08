import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeHomeComponent } from './pokehome/pokehome.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: PokeHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
