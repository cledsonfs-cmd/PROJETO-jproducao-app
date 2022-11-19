import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubSetor } from '../sub-setores/sub-setor';

@Injectable({
  providedIn: 'root'
})
export class SubSetoresService {

  constructor(
    private http : HttpClient
  ) { }
}
