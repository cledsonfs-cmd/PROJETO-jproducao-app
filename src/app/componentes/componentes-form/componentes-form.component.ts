import { Component, OnInit } from '@angular/core';

import { Componente } from '../componente';
import { ComponentesService } from '../../services/componentes.service';

@Component({
  selector: 'app-componentes-form',
  templateUrl: './componentes-form.component.html',
  styleUrls: ['./componentes-form.component.css']
})
export class ComponentesFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Componente = new Componente();

  constructor(
    private service: ComponentesService
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
