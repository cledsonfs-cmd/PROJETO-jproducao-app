import { Component, OnInit } from '@angular/core';

import { PontoControle } from '../ponto-controle'

@Component({
  selector: 'app-ponto-controles-form',
  templateUrl: './ponto-controles-form.component.html',
  styleUrls: ['./ponto-controles-form.component.css']
})
export class PontoControlesFormComponent implements OnInit {

  pontoControle: PontoControle;

  constructor() { 
    this.pontoControle = new PontoControle();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
