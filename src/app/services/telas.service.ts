import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tela } from '../telas/tela';

@Injectable({
  providedIn: 'root'
})
export class TelasService {

  constructor(
    private http : HttpClient
  ) { }
}
