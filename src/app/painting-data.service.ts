import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}

