import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acesso } from './../acessos/acesso';

@Injectable({
  providedIn: 'root'
})
export class AcessosService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<Acesso[]>(`http://localhost:8080/api/acesso`);
  }
}
