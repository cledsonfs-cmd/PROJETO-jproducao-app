import { Component, OnInit } from '@angular/core';

import { SetorPerda } from '../setor-perda';
import { SetorPerdasService } from '../../services/setor-perdas.service';

@Component({
  selector: 'app-setor-perdas-form',
  templateUrl: './setor-perdas-form.component.html',
  styleUrls: ['./setor-perdas-form.component.css']
})
export class SetorPerdasFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: SetorPerda = new SetorPerda();

  constructor(
    private service: SetorPerdasService
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
