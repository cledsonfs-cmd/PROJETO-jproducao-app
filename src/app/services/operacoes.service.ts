import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operacao } from '../operacoes/operacao';

@Injectable({
  providedIn: 'root'
})
export class OperacoesService {

  constructor(
    private http : HttpClient
  ) { }
}
