import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estoque } from '../estoques/estoque';

@Injectable({
  providedIn: 'root'
})
export class EstoquesService {

  constructor(
    private http : HttpClient
  ) { }
}
