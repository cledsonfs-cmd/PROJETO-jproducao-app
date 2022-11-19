import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reprogramacao } from '../reprogramacoes/reprogramacao';

@Injectable({
  providedIn: 'root'
})
export class ReprogramacoesService {

  constructor(
    private http : HttpClient
  ) { }
}
