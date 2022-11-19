import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponenteProcesso } from '../componente-processos/componente-processo';

@Injectable({
  providedIn: 'root'
})
export class ComponenteProcessosService {

  constructor(
    private http : HttpClient
  ) { }
}
