import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from '../logs/log';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<any>{    
    return this.http.get<any[]>(`http://localhost:8080/api/log`);
  }

  get(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/log/${id}`);
  }

  save( objeto: Log): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/log',objeto);
  }

  update( objeto: Log): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/log`,objeto);
  }

  delete( id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/log/${id}`);
  }
}
