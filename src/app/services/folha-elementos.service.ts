import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FolhaElemento } from '../folha-elementos/folha-elemento';

@Injectable({
  providedIn: 'root'
})
export class FolhaElementosService {

  constructor(
    private http : HttpClient
  ) { }
}
