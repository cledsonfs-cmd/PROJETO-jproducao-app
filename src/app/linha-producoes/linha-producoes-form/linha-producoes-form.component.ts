import { Component, OnInit } from '@angular/core';

import { LinhaProducao } from '../linha-producao';
import { LinhaProducoesService } from '../../services/linha-producoes.service';

@Component({
  selector: 'app-linha-producoes-form',
  templateUrl: './linha-producoes-form.component.html',
  styleUrls: ['./linha-producoes-form.component.css']
})
export class LinhaProducoesFormComponent implements OnInit {

  linhaProducao: LinhaProducao;

  constructor(
    private linhaProducoesService: LinhaProducoesService
  ) { 
    this.linhaProducao = new LinhaProducao();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
