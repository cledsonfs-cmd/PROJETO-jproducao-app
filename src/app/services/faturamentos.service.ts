import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Faturamento } from '../faturamentos/faturamento';

@Injectable({
  providedIn: 'root'
})
export class FaturamentosService {

  constructor(
    private http : HttpClient
  ) { }
}
