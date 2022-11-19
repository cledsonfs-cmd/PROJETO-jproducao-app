import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Devolucao } from '../devolucoes/devolucao';

@Injectable({
  providedIn: 'root'
})
export class DevolucoesService {

  constructor(
    private http : HttpClient
  ) { }
}
