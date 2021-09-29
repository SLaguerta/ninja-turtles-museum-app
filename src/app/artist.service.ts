import { Injectable } from '@angular/core';
import { Artist } from './artist';
import { ARTISTS } from './mock-artists';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  getArtists(): Observable<Artist[]> {
    const artists = of(ARTISTS);
    return artists;
  }

  getArtist(id: number): Observable<Artist> {
    const artist = ARTISTS.find( a => a.id === id)!;
    return of(artist); 
  }
}