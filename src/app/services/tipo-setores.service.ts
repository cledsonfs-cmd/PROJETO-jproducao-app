import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoSetor } from '../tipo-setores/tipo-setor';

@Injectable({
  providedIn: 'root'
})
export class TipoSetoresService {

  constructor(
    private http : HttpClient
  ) { }
}
