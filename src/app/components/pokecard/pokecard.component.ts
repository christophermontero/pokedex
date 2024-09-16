import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss'],
})
export class PokeCardComponent implements OnInit {
  @Input() poke: any;
  gif: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
