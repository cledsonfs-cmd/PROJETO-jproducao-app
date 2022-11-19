import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElementoTempo } from '../elemento-tempos/elemento-tempo';

@Injectable({
  providedIn: 'root'
})
export class ElementoTemposService {

  constructor(
    private http : HttpClient
  ) { }
}
