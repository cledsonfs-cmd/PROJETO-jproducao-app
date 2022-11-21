import { Component, OnInit } from '@angular/core';

import { Estoque } from '../estoque';
import { EstoquesService } from '../../services/estoques.service';

@Component({
  selector: 'app-estoques-form',
  templateUrl: './estoques-form.component.html',
  styleUrls: ['./estoques-form.component.css']
})
export class EstoquesFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Estoque = new Estoque();

  constructor(
    private service: EstoquesService
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
