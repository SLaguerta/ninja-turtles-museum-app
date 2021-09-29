import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaintingDataService {

  constructor(private http:HttpClient) { }

  //api call to met museum api to return objectids of Donatello paintings
  getPaintings() {
    return this.http.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=donatello');
  }
}
