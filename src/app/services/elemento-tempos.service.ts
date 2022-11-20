import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementoTempo } from '../elemento-tempos/elemento-tempo';

@Injectable({
  providedIn: 'root'
})
export class ElementoTemposService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/elemento-tempo`);
  }

  get(id: number): Observable<ElementoTempo>{
    return this.http.get<any>(`http://localhost:8080/api/elemento-tempo/${id}`);
  }

  save( objeto: ElementoTempo): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/elemento-tempo',objeto);
  }

  update( objeto: ElementoTempo): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/elemento-tempo`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/elemento-tempo/${id}`);
  }
}
