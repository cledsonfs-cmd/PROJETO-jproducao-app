import { Component, OnInit } from '@angular/core';

import { Tarefa } from '../tarefa';
import { TarefasService } from '../../services/tarefas.service';

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrls: ['./tarefas-form.component.css']
})
export class TarefasFormComponent implements OnInit {
  objeto: Tarefa = new Tarefa();

  constructor(
    private tarefasService: TarefasService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
