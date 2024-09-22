import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPokeAPIResponse } from 'src/app/interfaces/pokeApiResponse';
import { SortResult } from 'src/app/interfaces/sort';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokeEntryComponent } from '../poke-entry/poke-entry.component';

@Component({
  selector: 'app-pokehome',
  templateUrl: './poke-home.component.html',
  styleUrls: ['./poke-home.component.scss'],
})
export class PokeHomeComponent implements OnInit {
  limit: number = 54;
  currentPage: number = 1;
  cardsPerPage: number = 27;
  count: number = 0;
  totalPokes: number = 0;
  firstPoke!: any;
  pokemons: any[] = [];
  activePokemonName: string = '';
  @ViewChild(PokeEntryComponent, { read: ElementRef })
  entryCard!: ElementRef<HTMLElement>;
  searchBar!: ElementRef<HTMLElement>;
  pastScrollTop = 0;
  searchActive = false;
  loadingInitial = false;
  loadingGen = false;
  actualSort: SortResult = {
    by: 'id',
    direction: 'asc',
  };

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {
    this.loadingInitial = true;
    this.pokeService.getPokemons().subscribe((result: IPokeAPIResponse) => {
      setTimeout(() => {
        this.pokemons = result.data;
        this.totalPokes = result.count;
        this.count = result.data.length;
        this.loadingInitial = false;
      }, 800);
    });
    window.onscroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > this.pastScrollTop) {
        this.pastScrollTop = currentScrollTop;
        this.animateEntryCard();
      } else if (window.scrollY === 0 && this.pastScrollTop !== 0) {
        this.pastScrollTop = 0;
        this.animateEntryCard();
      }
    };
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.cardsPerPage;
  }

  get endIndex(): number {
    return this.currentPage * this.cardsPerPage;
  }

  handleCurrPageChanged(currPage: number) {
    this.currentPage = currPage;
  }

  handleLoadMorePokemons() {}

  get offset(): number {
    return (this.currentPage - 1) * this.cardsPerPage;
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

  onSortResult(event: SortResult) {
    this.pokemons = this.pokemons.sort((a: any, b: any) => {
      if (event.direction === 'asc') {
        if (event.by === 'id') {
          return a.id - b.id;
        } else if (event.by === 'name') {
          return a.name.localeCompare(b.name);
        }
      } else if (event.direction === 'desc') {
        if (event.by === 'id') {
          return b.id - a.id;
        } else if (event.by === 'name') {
          return b.name.localeCompare(a.name);
        }
      }
    });

    this.activePokemonName = this.pokemons[0].name;
    this.actualSort = event;
  }

  trackPokemonById(index: number, pokemon: any) {
    return pokemon.id;
  }
}
