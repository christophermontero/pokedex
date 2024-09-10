import { IPokemon } from './pokemon';

export interface IPokeAPIResponse {
  count: number;
  data: IPokemon[];
}
