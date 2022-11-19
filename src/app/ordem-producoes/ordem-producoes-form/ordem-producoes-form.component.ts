import { Component, OnInit } from '@angular/core';

import { OrdemProducao } from '../ordem-producao';
import { OrdemProducoesService } from '../../services/ordem-producoes.service';

@Component({
  selector: 'app-ordem-producoes-form',
  templateUrl: './ordem-producoes-form.component.html',
  styleUrls: ['./ordem-producoes-form.component.css']
})
export class OrdemProducoesFormComponent implements OnInit {

  ordemProducao: OrdemProducao;

  constructor(
    private ordemProducoesService: OrdemProducoesService
  ) { 
    this.ordemProducao = new OrdemProducao();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
