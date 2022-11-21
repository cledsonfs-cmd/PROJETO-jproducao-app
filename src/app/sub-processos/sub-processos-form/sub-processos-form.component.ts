import { Component, OnInit } from '@angular/core';

import { SubProcesso } from '../sub-processo';
import { SubProcessosService } from '../../services/sub-processos.service';

@Component({
  selector: 'app-sub-processos-form',
  templateUrl: './sub-processos-form.component.html',
  styleUrls: ['./sub-processos-form.component.css']
})
export class SubProcessosFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: SubProcesso = new SubProcesso();

  constructor(
    private service: SubProcessosService
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
