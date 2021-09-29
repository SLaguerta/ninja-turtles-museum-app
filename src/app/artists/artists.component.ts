import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists: Artist[] = [];

  /*
      1) inject ArtistService, defines a private artistService property and identifies it as a ArtistService injectionsite
      When Angular creates the ArtistsComponent, the Dependency Injection system sets the artistService parameter
      to the singleton instance of ArtistService.
      2) reserve the constructor for minimal initialization such as wiring constructor parameters to properties 
   */
  constructor(private artistService: ArtistService) { }


  //method returns Observable artist array to retrieve artists asynchronously from the service request
  getArtists(): void {
    this.artistService.getArtists()
    .subscribe(artists => this.artists = artists);
  }

  //call getArtists() method in ngOnInit lifesycle hook so anular ngOnInit() will call it at an apporiate time after constructing the ArtistsCOmponent instance
  ngOnInit() {
    this.getArtists();
  }

  selectedArtist?: Artist;

  onSelect(hero: Artist): void {
    this.selectedArtist = hero;
  }


}
