import { Component, OnInit } from '@angular/core';

import { MotivoReprogramacao } from '../motivo-reprogramacao';
import { MotivoReprogramacoesService } from '../../services/motivo-reprogramacoes.service';

@Component({
  selector: 'app-motivo-reprogramacoes-form',
  templateUrl: './motivo-reprogramacoes-form.component.html',
  styleUrls: ['./motivo-reprogramacoes-form.component.css']
})
export class MotivoReprogramacoesFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: MotivoReprogramacao = new MotivoReprogramacao();

  constructor(
    private service: MotivoReprogramacoesService
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
