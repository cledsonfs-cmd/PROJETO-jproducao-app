import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Procedimento } from '../procedimentos/procedimento';

@Injectable({
  providedIn: 'root'
})
export class ProcedimentosService {

  constructor(
    private http : HttpClient
  ) { }
}
