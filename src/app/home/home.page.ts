import { StarTrekService } from './../services/star-trek.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Character } from '../model/character';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  characters: Array<Character> = [];
  pageIndex = 0;
  lastPage  = false;
  private characterSubscribe: Subscription;
  constructor(private starTrekService: StarTrekService) {}
  ngOnInit(): void {
    this.characterSubscribe = this.starTrekService.loadCharacter(0).subscribe(
      results => {
        this.characters = results.results;
        this.lastPage = results.lastPage;
      }
    );
  }

  ngOnDestroy() {
    this.characterSubscribe.unsubscribe();
  }

  loadNextPage(event) {
    this.pageIndex++;
    this.starTrekService.loadCharacter(this.pageIndex).subscribe(result => {
      console.log(result.results);
      this.characters =  [...this.characters, ...result.results];
      this.lastPage = result.lastPage;
      event.target.complete();
    });
  }

}
