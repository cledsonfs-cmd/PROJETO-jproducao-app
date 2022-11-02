import { Component, OnInit } from '@angular/core';

import { Funcionario } from '../funcionario'

@Component({
  selector: 'app-funcionarios-form',
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.css']
})
export class FuncionariosFormComponent implements OnInit {

  funcionario: Funcionario;

  constructor() { 
    this.funcionario = new Funcionario();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
