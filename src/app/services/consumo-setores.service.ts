import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsumoSetor } from '../consumo-setores/consumo-setor';

@Injectable({
  providedIn: 'root'
})
export class ConsumoSetoresService {

  constructor(
    private http : HttpClient
  ) { }
}
