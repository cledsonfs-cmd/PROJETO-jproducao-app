import { Component, OnInit } from '@angular/core';

import { FuncionarioEquipamento } from '../funcionario-equipamento'

@Component({
  selector: 'app-funcionario-equipamentos-form',
  templateUrl: './funcionario-equipamentos-form.component.html',
  styleUrls: ['./funcionario-equipamentos-form.component.css']
})
export class FuncionarioEquipamentosFormComponent implements OnInit {

  funcionarioEquipamento: FuncionarioEquipamento;

  constructor() { 
    this.funcionarioEquipamento = new FuncionarioEquipamento();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
