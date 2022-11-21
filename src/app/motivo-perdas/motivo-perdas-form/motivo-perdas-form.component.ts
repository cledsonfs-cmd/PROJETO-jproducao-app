import { Component, OnInit } from '@angular/core';

import { MotivoPerda } from '../motivo-perda';
import { MotivoPerdasService } from '../../services/motivo-perdas.service';

@Component({
  selector: 'app-motivo-perdas-form',
  templateUrl: './motivo-perdas-form.component.html',
  styleUrls: ['./motivo-perdas-form.component.css']
})
export class MotivoPerdasFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: MotivoPerda = new MotivoPerda();

  constructor(
    private service: MotivoPerdasService
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
