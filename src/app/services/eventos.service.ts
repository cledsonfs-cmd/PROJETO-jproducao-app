import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../eventos/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(
    private http : HttpClient
  ) { }
}
