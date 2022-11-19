import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cep } from '../tools/cep'

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(
    private http : HttpClient
    ) { }

  getCep(valor: String) : Observable<any>{    
    return this.http.get<Cep>(`https://viacep.com.br/ws/${valor}/json/`);
  }

  
}
