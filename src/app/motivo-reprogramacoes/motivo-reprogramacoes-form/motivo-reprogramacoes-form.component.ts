import { Component, OnInit } from '@angular/core';

import { MotivoReprogramacao } from '../motivo-reprogramacao';
import { MotivoReprogramacoesService } from '../../services/motivo-reprogramacoes.service';

@Component({
  selector: 'app-motivo-reprogramacoes-form',
  templateUrl: './motivo-reprogramacoes-form.component.html',
  styleUrls: ['./motivo-reprogramacoes-form.component.css']
})
export class MotivoReprogramacoesFormComponent implements OnInit {

  motivoReprogramacao: MotivoReprogramacao;

  constructor(
    private motivoReprogramacoesService: MotivoReprogramacoesService
  ) { 
    this.motivoReprogramacao = new MotivoReprogramacao();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
