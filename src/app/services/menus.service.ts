import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../menus/menu';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/menu`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/menu/${id}`);
  }

  save( objeto: Menu): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/menu',objeto);
  }

  update( objeto: Menu): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/menu`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/menu/${id}`);
  }
}
