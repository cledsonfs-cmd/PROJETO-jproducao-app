import { Component, OnInit } from '@angular/core';

import { Devolucao } from '../devolucao';
import { DevolucoesService } from '../../services/devolucoes.service';

@Component({
  selector: 'app-devolucoes-form',
  templateUrl: './devolucoes-form.component.html',
  styleUrls: ['./devolucoes-form.component.css']
})
export class DevolucoesFormComponent implements OnInit {

  devolucao: Devolucao;

  constructor(
    private devolucoesService: DevolucoesService
  ) { 
    this.devolucao = new Devolucao();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
