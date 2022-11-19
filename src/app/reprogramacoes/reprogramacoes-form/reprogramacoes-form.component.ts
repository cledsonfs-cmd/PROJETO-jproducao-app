import { Component, OnInit } from '@angular/core';

import { Reprogramacao } from '../reprogramacao';
import { ReprogramacoesService } from '../../services/reprogramacoes.service';

@Component({
  selector: 'app-reprogramacoes-form',
  templateUrl: './reprogramacoes-form.component.html',
  styleUrls: ['./reprogramacoes-form.component.css']
})
export class ReprogramacoesFormComponent implements OnInit {
  objeto: Reprogramacao = new Reprogramacao();

  constructor(
    private reprogramacoesService: ReprogramacoesService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
