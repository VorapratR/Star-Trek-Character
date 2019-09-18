import { StarTrekService } from './../services/star-trek.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  characters: Array<Character> = [];
  constructor(private starTrekService: StarTrekService) {}
  ngOnInit(): void {
    this.starTrekService.loadCharacter().subscribe(result => {
      this.characters = this.characters.concat(this.characters, result);
      console.log(this.characters);
    });
  }

}
