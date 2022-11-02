import { Component, OnInit } from '@angular/core';

import { ConsumoSetor } from '../consumo-setor'

@Component({
  selector: 'app-consumo-setores-form',
  templateUrl: './consumo-setores-form.component.html',
  styleUrls: ['./consumo-setores-form.component.css']
})
export class ConsumoSetoresFormComponent implements OnInit {

  consumoSetor: ConsumoSetor;

  constructor() { 
    this.consumoSetor = new ConsumoSetor();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
