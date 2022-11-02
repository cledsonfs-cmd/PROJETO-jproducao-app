import { Component, OnInit } from '@angular/core';

import { Reprogramacao } from '../reprogramacao'

@Component({
  selector: 'app-reprogramacoes-form',
  templateUrl: './reprogramacoes-form.component.html',
  styleUrls: ['./reprogramacoes-form.component.css']
})
export class ReprogramacoesFormComponent implements OnInit {
  reprogramacao: Reprogramacao;

  constructor() { 
    this.reprogramacao = new Reprogramacao();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
