import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PontoControle } from '../ponto-controles/ponto-controle';

@Injectable({
  providedIn: 'root'
})
export class PontoControlesService {

  constructor(
    private http : HttpClient
  ) { }
}
