import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrazoEntrega } from '../prazo-entregas/prazo-entrega';

@Injectable({
  providedIn: 'root'
})
export class PrazoEntregasService {

  constructor(
    private http : HttpClient
  ) { }
}
