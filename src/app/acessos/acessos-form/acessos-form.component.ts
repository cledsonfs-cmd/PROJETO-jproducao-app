import { Component, OnInit } from '@angular/core';

import { Acesso } from '../acesso';
import { AcessosService } from '../../services/acessos.service';

@Component({
  selector: 'app-acessos-form',
  templateUrl: './acessos-form.component.html',
  styleUrls: ['./acessos-form.component.css']
})
export class AcessosFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Acesso = new Acesso();

  constructor(
    private service: AcessosService
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
