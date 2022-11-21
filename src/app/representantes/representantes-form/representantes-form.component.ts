import { Component, OnInit } from '@angular/core';

import { Representante } from '../representante';
import { RepresentantesService } from '../../services/representantes.service';

@Component({
  selector: 'app-representantes-form',
  templateUrl: './representantes-form.component.html',
  styleUrls: ['./representantes-form.component.css']
})
export class RepresentantesFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Representante = new Representante();

  constructor(
    private service: RepresentantesService
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
