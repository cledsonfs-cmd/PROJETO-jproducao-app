import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FuncionarioEquipamento } from '../funcionario-equipamentos/funcionario-equipamento';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioEquipamentosService {

  constructor(
    private http : HttpClient
  ) { }
}
