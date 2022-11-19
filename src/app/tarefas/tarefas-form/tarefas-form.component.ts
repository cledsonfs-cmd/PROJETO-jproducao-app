import { Component, OnInit } from '@angular/core';

import { Tarefa } from '../tarefa';
import { TarefasService } from '../../services/tarefas.service';

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrls: ['./tarefas-form.component.css']
})
export class TarefasFormComponent implements OnInit {
  tarefa: Tarefa;

  constructor(
    private tarefasService: TarefasService
  ) { 
    this.tarefa = new Tarefa();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
