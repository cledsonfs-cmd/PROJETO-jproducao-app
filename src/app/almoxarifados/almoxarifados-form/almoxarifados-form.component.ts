import { Component, OnInit } from '@angular/core';

import { Almoxarifado } from '../almoxarifado';
import { AlmoxarifadosService } from '../../services/almoxarifados.service';

@Component({
  selector: 'app-almoxarifados-form',
  templateUrl: './almoxarifados-form.component.html',
  styleUrls: ['./almoxarifados-form.component.css']
})
export class AlmoxarifadosFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Almoxarifado = new Almoxarifado();

  constructor(
    private service: AlmoxarifadosService
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
