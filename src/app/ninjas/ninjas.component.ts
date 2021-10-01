import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ninjas',
  templateUrl: './ninjas.component.html',
  styleUrls: ['./ninjas.component.scss']
})
export class NinjasComponent implements OnInit {

  ninja ='Leonardo';
  
  constructor() { }

  ngOnInit(): void {
  }

}
