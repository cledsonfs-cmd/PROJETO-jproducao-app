import { Component, OnInit } from '@angular/core';

import { Devolucao } from '../devolucao';
import { DevolucoesService } from '../../services/devolucoes.service';

@Component({
  selector: 'app-devolucoes-form',
  templateUrl: './devolucoes-form.component.html',
  styleUrls: ['./devolucoes-form.component.css']
})
export class DevolucoesFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Devolucao = new Devolucao();

  constructor(
    private service: DevolucoesService
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
