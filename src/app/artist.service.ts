import { Injectable } from '@angular/core';
import { Artist } from './artist';
import { ARTISTS } from './mock-artists';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  getArtists(): Artist[] {
    return ARTISTS;
  }
}