import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipamento } from '../equipamentos/equipamento';

@Injectable({
  providedIn: 'root'
})
export class EquipamentosService {

  constructor(
    private http : HttpClient
  ) { }
}
