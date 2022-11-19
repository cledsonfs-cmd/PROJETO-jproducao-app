import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Processo } from '../processos/processo';

@Injectable({
  providedIn: 'root'
})
export class ProcessosService {

  constructor(
    private http : HttpClient
  ) { }
}
