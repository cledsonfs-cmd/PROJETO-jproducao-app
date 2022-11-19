import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Representante } from '../representantes/representante';

@Injectable({
  providedIn: 'root'
})
export class RepresentantesService {

  constructor(
    private http : HttpClient
  ) { }
}
