import { Component, OnInit } from '@angular/core';
import { IPokeAPIResponse } from 'src/app/interfaces/pokeApiResponse';
import { IPokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokehome',
  templateUrl: './pokehome.component.html',
  styleUrls: ['./pokehome.component.scss'],
})
export class PokeHomeComponent implements OnInit {
  loadingInitial: boolean = false;
  pokemons: IPokemon[] = [];
  totalPokes: number = 0;
  count: number = 0;

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    this.loadingInitial = true;
    this.pokeService.getPokemons().subscribe((result: IPokeAPIResponse) => {
      this.pokemons = result.data;
      this.totalPokes = result.count;
      this.count = result.data.length;
      this.loadingInitial = false;
    });
  }
}
