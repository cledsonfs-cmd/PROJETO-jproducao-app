import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MateriaPrima } from '../materia-primas/materia-prima';

@Injectable({
  providedIn: 'root'
})
export class MateriaPrimasService {

  constructor(
    private http : HttpClient
  ) { }
}
