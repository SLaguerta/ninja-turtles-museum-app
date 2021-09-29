import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../artist';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    ) {

   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.artist = params['artist.name'];
    });
  }

  @Input() artist?: Artist;
}
