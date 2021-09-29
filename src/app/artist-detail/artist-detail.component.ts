import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../artist';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getArtist();
  }

  getArtist(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artistService.getArtist(id)
      .subscribe(artist => this.artist = artist);
  }

  @Input() artist?: Artist;
}
