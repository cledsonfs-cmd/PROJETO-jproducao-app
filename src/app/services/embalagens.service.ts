import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Embalagem } from '../embalagens/embalagem';

@Injectable({
  providedIn: 'root'
})
export class EmbalagensService {

  constructor(
    private http : HttpClient
  ) { }
}
