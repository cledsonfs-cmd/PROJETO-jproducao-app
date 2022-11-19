import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from '../tarefas/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(
    private http : HttpClient
  ) { }
}
