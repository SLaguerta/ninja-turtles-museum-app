import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaintingDataService {

  constructor(private http:HttpClient) { }
}
