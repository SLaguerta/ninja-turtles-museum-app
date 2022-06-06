import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Artist } from './artist';
import { ARTISTS } from './mock-artists';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaintingDataService {

  constructor(private http:HttpClient) { }

  //api call to met museum api to return Da Vinci drawing of a bear
  getPaintings() {
    return this.http.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/459184');
  }

  // getArtistPaintings()? Create a function to return paitings based on the artist name
  getArtistPaintings(name: string) {
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q='
    let queryParams = new HttpParams();
    queryParams.append('q', name)
    return this.http.get(url + name);

  }
}


