import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponenteMateriaPrima } from '../componente-materia-primas/componente-materia-prima';

@Injectable({
  providedIn: 'root'
})
export class ComponenteMateriaPrimasService {

  constructor(
    private http : HttpClient
  ) { }
}
