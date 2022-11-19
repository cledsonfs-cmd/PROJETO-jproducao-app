import { Component, OnInit } from '@angular/core';

import { FuncionarioEquipamento } from '../funcionario-equipamento';
import { FuncionarioEquipamentosService } from '../../services/funcionario-equipamentos.service';

@Component({
  selector: 'app-funcionario-equipamentos-form',
  templateUrl: './funcionario-equipamentos-form.component.html',
  styleUrls: ['./funcionario-equipamentos-form.component.css']
})
export class FuncionarioEquipamentosFormComponent implements OnInit {

  objeto: FuncionarioEquipamento = new FuncionarioEquipamento();

  constructor(
    private funcionarioEquipamentosService: FuncionarioEquipamentosService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
