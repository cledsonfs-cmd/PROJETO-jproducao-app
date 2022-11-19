import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carteira } from '../carteiras/carteira';

@Injectable({
  providedIn: 'root'
})
export class CarteirasService {

  constructor(
    private http : HttpClient
  ) { }
}
