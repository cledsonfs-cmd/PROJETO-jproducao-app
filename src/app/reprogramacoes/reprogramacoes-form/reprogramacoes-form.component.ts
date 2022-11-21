import { Component, OnInit } from '@angular/core';

import { Reprogramacao } from '../reprogramacao';
import { ReprogramacoesService } from '../../services/reprogramacoes.service';

@Component({
  selector: 'app-reprogramacoes-form',
  templateUrl: './reprogramacoes-form.component.html',
  styleUrls: ['./reprogramacoes-form.component.css']
})
export class ReprogramacoesFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Reprogramacao = new Reprogramacao();

  constructor(
    private service: ReprogramacoesService
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
