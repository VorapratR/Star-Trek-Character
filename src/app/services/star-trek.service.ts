import { Character } from './../model/character';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StarTrekService {

  constructor(private https: HttpClient) { }
  loadCharacter(): Observable<Character> {
    let url = `http://stapi.co/api/v1/rest/character/search`;
    return this.https.get(url).pipe(
      map(data => {
          return data['characters']
        })
      );
    }
}
