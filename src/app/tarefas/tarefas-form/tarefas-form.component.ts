import { Component, OnInit } from '@angular/core';

import { Tarefa } from '../tarefa'

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrls: ['./tarefas-form.component.css']
})
export class TarefasFormComponent implements OnInit {
  tarefa: Tarefa;

  constructor() { 
    this.tarefa = new Tarefa();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
