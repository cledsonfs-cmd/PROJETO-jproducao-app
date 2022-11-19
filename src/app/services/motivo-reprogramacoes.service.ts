import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MotivoReprogramacao } from '../motivo-reprogramacoes/motivo-reprogramacao';

@Injectable({
  providedIn: 'root'
})
export class MotivoReprogramacoesService {

  constructor(
    private http : HttpClient
  ) { }
}
