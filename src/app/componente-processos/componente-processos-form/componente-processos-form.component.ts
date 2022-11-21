import { Component, OnInit } from '@angular/core';

import { ComponenteProcesso } from '../componente-processo';
import { ComponenteProcessosService } from '../../services/componente-processos.service';

@Component({
  selector: 'app-componente-processos-form',
  templateUrl: './componente-processos-form.component.html',
  styleUrls: ['./componente-processos-form.component.css']
})
export class ComponenteProcessosFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: ComponenteProcesso = new ComponenteProcesso();

  constructor(
    private service: ComponenteProcessosService
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
