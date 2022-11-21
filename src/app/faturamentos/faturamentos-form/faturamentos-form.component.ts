import { Component, OnInit } from '@angular/core';

import { Faturamento } from '../faturamento';
import { FaturamentosService } from '../../services/faturamentos.service';

@Component({
  selector: 'app-faturamentos-form',
  templateUrl: './faturamentos-form.component.html',
  styleUrls: ['./faturamentos-form.component.css']
})
export class FaturamentosFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Faturamento = new Faturamento();

  constructor(
    private service: FaturamentosService
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
