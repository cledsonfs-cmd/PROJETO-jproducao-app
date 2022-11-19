import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Setor } from '../setores/setor';

@Injectable({
  providedIn: 'root'
})
export class SetoresService {

  constructor(
    private http : HttpClient
  ) { }
}
