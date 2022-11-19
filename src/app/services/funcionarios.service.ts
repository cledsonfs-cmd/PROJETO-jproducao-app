import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../funcionarios/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(
    private http : HttpClient
  ) { }
}
