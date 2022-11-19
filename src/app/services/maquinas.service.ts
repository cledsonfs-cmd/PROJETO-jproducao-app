import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Maquina } from '../maquinas/maquina';

@Injectable({
  providedIn: 'root'
})
export class MaquinasService {

  constructor(
    private http : HttpClient
  ) { }
}
