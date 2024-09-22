import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokeAPIResponse } from '../interfaces/pokeApiResponse';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private _url: string = '../../assets/data';

  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get<IPokeAPIResponse>(`${this._url}/pokemons.json`);
  }

  getPokemonByName() {
    return this.http.get<IPokeAPIResponse>(
      `${this._url}/pokemons-details.json`
    );
  }
}
