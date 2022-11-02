import { Component, OnInit } from '@angular/core';

import { OrdemProducao } from '../ordem-producao'

@Component({
  selector: 'app-ordem-producoes-form',
  templateUrl: './ordem-producoes-form.component.html',
  styleUrls: ['./ordem-producoes-form.component.css']
})
export class OrdemProducoesFormComponent implements OnInit {

  ordemProducao: OrdemProducao;

  constructor() { 
    this.ordemProducao = new OrdemProducao();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
