import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LinhaProducao } from '../linha-producoes/linha-producao';

@Injectable({
  providedIn: 'root'
})
export class LinhaProducoesService {

  constructor(
    private http : HttpClient
  ) { }
}
