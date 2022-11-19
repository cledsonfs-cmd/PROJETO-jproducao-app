import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Elemento } from '../elementos/elemento';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {

  constructor(
    private http : HttpClient