import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SetorPerda } from '../setor-perdas/setor-perda';

@Injectable({
  providedIn: 'root'
})
export class SetorPerdasService {

  constructor(
    private http : HttpClient
  ) { }
}
