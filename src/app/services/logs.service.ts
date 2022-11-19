import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from '../logs/log';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(
    private http : HttpClient
  ) { }
}
