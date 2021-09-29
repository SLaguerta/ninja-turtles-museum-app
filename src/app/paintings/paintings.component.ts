import { Component, Input, OnInit } from '@angular/core';
import { PaintingDataService } from '../painting-data.service';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss']
})
export class PaintingsComponent implements OnInit {

  paintingsData = null;

  constructor(private paintingDataSerivce: PaintingDataService) { }

  ngOnInit() {
    this.paintingDataSerivce.getPaintings().subscribe((data: any) => {
      this.paintingsData = data;
    });
  }

}
