import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Almoxarifado } from '../almoxarifados/almoxarifado';

@Injectable({
  providedIn: 'root'
})
export class AlmoxarifadosService {

  constructor(
    private http : HttpClient
  ) { }
}
