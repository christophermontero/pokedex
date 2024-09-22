import { Component, ElementRef, OnInit } from '@angular/core';
import { IPokeAPIResponse } from 'src/app/interfaces/pokeApiResponse';
import { IPokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokehome',
  templateUrl: './poke-home.component.html',
  styleUrls: ['./poke-home.component.scss'],
})
export class PokeHomeComponent implements OnInit {
  loadingInitial: boolean = false;
  pokemons: IPokemon[] = [];
  totalPokes: number = 0;
  count: number = 0;
  pastScrollTop = 0;
  activePokemonName: string = '';
  entryCard!: ElementRef<HTMLElement>;
  currentPage: number = 1;
  cardsPerPage: number = 18;
  searchActive = false;

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

  get startIndex(): number {
    return (this.currentPage - 1) * this.cardsPerPage;
  }

  get endIndex(): number {
    return this.currentPage * this.cardsPerPage;
  }

  setActivePokemon(poke: any) {
    if (this.pastScrollTop === window.scrollY) {
      this.activePokemonName = poke.name;
    } else {
      this.pastScrollTop = window.scrollY;
      this.animateEntryCard(poke);
    }
  }

  animateEntryCard(poke?: any) {
    if (this.entryCard?.nativeElement) {
      this.entryCard.nativeElement.classList.add('hidden');

      setTimeout(() => {
        if (poke) this.activePokemonName = poke.name;
        this.entryCard.nativeElement.style.marginTop = window.scrollY + 'px';
        this.entryCard.nativeElement.style.transform = 'translateX(-30px)';
      }, 250);

      setTimeout(() => {
        this.entryCard.nativeElement.style.transform = 'translateX(0px)';
        this.entryCard.nativeElement.classList.remove('hidden');
      }, 350);
    }
  }

  trackPokemonById(index: number, pokemon: any) {
    return pokemon.id;
  }
}
