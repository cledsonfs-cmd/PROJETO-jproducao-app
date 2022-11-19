import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http : HttpClient
  ) { }
}
