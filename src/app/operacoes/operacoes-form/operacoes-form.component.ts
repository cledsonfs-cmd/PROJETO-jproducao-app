import { Component, OnInit } from '@angular/core';

import { Operacao } from '../operacao';
import { OrdemProducoesService } from '../../services/ordem-producoes.service';
import { OperacoesService } from 'src/app/services/operacoes.service';

@Component({
  selector: 'app-operacoes-form',
  templateUrl: './operacoes-form.component.html',
  styleUrls: ['./operacoes-form.component.css']
})
export class OperacoesFormComponent implements OnInit {
  objeto: Operacao = new Operacao();

  constructor(
    private operacoesService: OperacoesService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
