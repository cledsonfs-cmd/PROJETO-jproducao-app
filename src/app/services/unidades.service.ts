import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unidade } from '../unidades/unidade';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  constructor(
    private http : HttpClient
  ) { }
}
