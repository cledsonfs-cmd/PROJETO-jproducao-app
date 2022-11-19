import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lote } from '../lotes/lote';

@Injectable({
  providedIn: 'root'
})
export class LotesService {

  constructor(
    private http : HttpClient
  ) { }
}
