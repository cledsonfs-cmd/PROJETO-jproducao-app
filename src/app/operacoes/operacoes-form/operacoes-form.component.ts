import { Component, OnInit } from '@angular/core';

import { Operacao } from '../operacao'

@Component({
  selector: 'app-operacoes-form',
  templateUrl: './operacoes-form.component.html',
  styleUrls: ['./operacoes-form.component.css']
})
export class OperacoesFormComponent implements OnInit {
  operacao: Operacao;

  constructor() { 
    this.operacao = new Operacao();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
