import { Component, OnInit } from '@angular/core';

import { Producao } from '../producao';
import { ProducoesService } from '../../services/producoes.service';

@Component({
  selector: 'app-producoes-form',
  templateUrl: './producoes-form.component.html',
  styleUrls: ['./producoes-form.component.css']
})
export class ProducoesFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Producao = new Producao();

  constructor(
    private service: ProducoesService
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
