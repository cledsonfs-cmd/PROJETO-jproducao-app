import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../componentes/componente';

@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

  constructor(
    private http : HttpClient
  ) { }
}
