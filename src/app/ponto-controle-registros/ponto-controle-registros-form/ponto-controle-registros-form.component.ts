import { Component, OnInit } from '@angular/core';

import { PontoControleRegistros } from '../ponto-controle-registros';
import { PontoControleRegistroService } from '../../services/ponto-controle-registro.service';

@Component({
  selector: 'app-ponto-controle-registros-form',
  templateUrl: './ponto-controle-registros-form.component.html',
  styleUrls: ['./ponto-controle-registros-form.component.css']
})
export class PontoControleRegistrosFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: PontoControleRegistros = new PontoControleRegistros();
  constructor(
    private service: PontoControleRegistroService
  ) { }

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
