import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IPokeAPIResponse } from 'src/app/interfaces/pokeApiResponse';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-entry',
  templateUrl: './poke-entry.component.html',
  styleUrls: ['./poke-entry.component.scss'],
})
export class PokeEntryComponent implements OnInit, OnChanges {
  @Input() pokemonName!: String;
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  pokemon!: any;
  totalStatValue!: number;
  typesInfo!: any[];
  weaknesses!: string[];
  loadingPoke = false;

  constructor(private pokeService: PokemonService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.pokemonName && changes.pokemonName.currentValue !== undefined) {
      this.updateState();
    }
  }

  setTotalStatValue() {
    this.totalStatValue = this.pokemon?.stats
      .map((poke: any) => poke.value)
      .reduce((accum: number, stat: any) => (accum += stat));
  }

  getPokemonDetails() {
    this.loadingPoke = true;
    this.pokeService.getPokemons().subscribe(
      (res: IPokeAPIResponse) => {
        setTimeout(() => {
          this.pokemon = res.data
            .filter((poke) => poke.name === this.pokemonName)
            .pop();
          this.setTotalStatValue();
          this.loadingPoke = false;
        }, 500);
      },
      (err) => {
        console.log(err);
        this.loadingPoke = false;
      }
    );
  }

  updateState() {
    this.getPokemonDetails();
  }
}
