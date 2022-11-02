import { Component, OnInit } from '@angular/core';

import { Maquina } from '../maquina'

@Component({
  selector: 'app-maquinas-form',
  templateUrl: './maquinas-form.component.html',
  styleUrls: ['./maquinas-form.component.css']
})
export class MaquinasFormComponent implements OnInit {

  maquina: Maquina;

  constructor() { 
    this.maquina = new Maquina();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
