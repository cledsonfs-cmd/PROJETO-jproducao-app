import { Component, OnInit } from '@angular/core';

import { FolhaObservacao } from '../folha-observacao';
import { FolhaObservacoesService } from '../../services/folha-observacoes.service';

@Component({
  selector: 'app-folha-observacoes-form',
  templateUrl: './folha-observacoes-form.component.html',
  styleUrls: ['./folha-observacoes-form.component.css']
})
export class FolhaObservacoesFormComponent implements OnInit {

  objeto: FolhaObservacao = new FolhaObservacao();

  constructor(
    private folhaObservacoesService: FolhaObservacoesService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
