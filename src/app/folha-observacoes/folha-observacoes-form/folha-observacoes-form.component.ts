import { Component, OnInit } from '@angular/core';

import { FolhaObservacao } from '../folha-observacao';
import { FolhaObservacoesService } from '../../services/folha-observacoes.service';

@Component({
  selector: 'app-folha-observacoes-form',
  templateUrl: './folha-observacoes-form.component.html',
  styleUrls: ['./folha-observacoes-form.component.css']
})
export class FolhaObservacoesFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: FolhaObservacao = new FolhaObservacao();

  constructor(
    private service: FolhaObservacoesService
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
