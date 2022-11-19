import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../produtos/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private http : HttpClient
  ) { }
}
