import { Component, OnInit } from '@angular/core';

import { Producao } from '../producao'

@Component({
  selector: 'app-producoes-form',
  templateUrl: './producoes-form.component.html',
  styleUrls: ['./producoes-form.component.css']
})
export class ProducoesFormComponent implements OnInit {
  producao: Producao;

  constructor() { 
    this.producao = new Producao();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
