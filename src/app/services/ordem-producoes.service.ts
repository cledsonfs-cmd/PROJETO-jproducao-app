import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdemProducao } from '../ordem-producoes/ordem-producao';

@Injectable({
  providedIn: 'root'
})
export class OrdemProducoesService {

  constructor(
    private http : HttpClient
  ) { }
}
