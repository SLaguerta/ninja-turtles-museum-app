import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { PaintingDataService } from '../painting-data.service';
import { Artist } from '../artist';


@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss']
})
export class PaintingsComponent implements OnInit {

  paintingsData: any = [];

  @Input() artist: Artist;


  constructor(
    private paintingDataSerivce: PaintingDataService) { }

  getPaintings(): void {
    this.paintingDataSerivce.getPaintings().subscribe(paintingsData => this.paintingsData = paintingsData);
  }

  getArtistPaintings(name: string) {
    this.paintingDataSerivce.getArtistPaintings(name).subscribe(paintingsData => this.paintingsData = paintingsData);
  }

  ngOnInit() {
    
  }


}
