import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producao } from '../producoes/producao';

@Injectable({
  providedIn: 'root'
})
export class ProducoesService {

  constructor(
    private http : HttpClient
  ) { }
}
