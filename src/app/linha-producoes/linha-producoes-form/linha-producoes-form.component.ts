import { Component, OnInit } from '@angular/core';

import { LinhaProducao } from '../linha-producao';
import { LinhaProducoesService } from '../../services/linha-producoes.service';

@Component({
  selector: 'app-linha-producoes-form',
  templateUrl: './linha-producoes-form.component.html',
  styleUrls: ['./linha-producoes-form.component.css']
})
export class LinhaProducoesFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: LinhaProducao = new LinhaProducao();

  constructor(
    private service: LinhaProducoesService
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
