import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pop } from '../pops/pop';

@Injectable({
  providedIn: 'root'
})
export class PopsService {

  constructor(
    private http : HttpClient
  ) { }
}
