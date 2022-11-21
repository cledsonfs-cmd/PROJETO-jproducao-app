import { Component, OnInit } from '@angular/core';

import { OrdemProducao } from '../ordem-producao';
import { OrdemProducoesService } from '../../services/ordem-producoes.service';

@Component({
  selector: 'app-ordem-producoes-form',
  templateUrl: './ordem-producoes-form.component.html',
  styleUrls: ['./ordem-producoes-form.component.css']
})
export class OrdemProducoesFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: OrdemProducao = new OrdemProducao();

  constructor(
    private service: OrdemProducoesService
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
