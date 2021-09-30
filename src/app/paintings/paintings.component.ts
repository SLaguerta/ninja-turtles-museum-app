import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { PaintingDataService } from '../painting-data.service';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss']
})
export class PaintingsComponent implements OnInit {

  paintingsData: any = [];

  constructor(private paintingDataSerivce: PaintingDataService) { }

  getPaintings(): void {
    this.paintingDataSerivce.getPaintings().subscribe(paintingsData => this.paintingsData = paintingsData)
    console.log(this.paintingsData);
  }

  ngOnInit() {
    this.getPaintings();
  }

}
