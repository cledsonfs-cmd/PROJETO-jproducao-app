import { Component, OnInit } from '@angular/core';

import { Devolucao } from '../devolucao'

@Component({
  selector: 'app-devolucoes-form',
  templateUrl: './devolucoes-form.component.html',
  styleUrls: ['./devolucoes-form.component.css']
})
export class DevolucoesFormComponent implements OnInit {

  devolucao: Devolucao;

  constructor() { 
    this.devolucao = new Devolucao();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
