import { Component, OnInit } from '@angular/core';

import { Funcionario } from '../funcionario';
import { FuncionariosService } from '../../services/funcionarios.service';

@Component({
  selector: 'app-funcionarios-form',
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.css']
})
export class FuncionariosFormComponent implements OnInit {

  objeto: Funcionario = new Funcionario();

  constructor(
    private funcionariosService: FuncionariosService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
