import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfil } from '../perfis/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfisService {

  constructor(
    private http : HttpClient
  ) { }
}
