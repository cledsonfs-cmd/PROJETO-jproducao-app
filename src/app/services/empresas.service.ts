import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from '../empresas/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(
    private http : HttpClient
  ) { }
}
