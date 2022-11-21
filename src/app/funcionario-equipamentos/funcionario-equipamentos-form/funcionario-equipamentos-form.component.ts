import { Component, OnInit } from '@angular/core';

import { FuncionarioEquipamento } from '../funcionario-equipamento';
import { FuncionarioEquipamentosService } from '../../services/funcionario-equipamentos.service';

@Component({
  selector: 'app-funcionario-equipamentos-form',
  templateUrl: './funcionario-equipamentos-form.component.html',
  styleUrls: ['./funcionario-equipamentos-form.component.css']
})
export class FuncionarioEquipamentosFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: FuncionarioEquipamento = new FuncionarioEquipamento();

  constructor(
    private service: FuncionarioEquipamentosService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.id > 0){
      this.service
        .update(this.objeto)
        .subscribe(response => {
          this.success = true;
          this.errros = [];
        }, errorResponse => { this.errros = ['Erro ao atualizar.'];
      });
    }else{      
      this.service.save(this.objeto)
        .subscribe(response => {
          this.success = true;
          this.errros = [];
      this.objeto = response;        
  },
      errorResponse => { this.errros = errorResponse.errros;
      this.success = false;        
    });
    this.success = true;
  }
  }

}
