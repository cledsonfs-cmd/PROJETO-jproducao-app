import { Component, OnInit } from '@angular/core';

import { ComponenteMateriaPrima } from '../componente-materia-prima';
import { ComponenteMateriaPrimasService } from '../../services/componente-materia-primas.service';

@Component({
  selector: 'app-componente-materia-primas-form',
  templateUrl: './componente-materia-primas-form.component.html',
  styleUrls: ['./componente-materia-primas-form.component.css']
})
export class ComponenteMateriaPrimasFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: ComponenteMateriaPrima = new ComponenteMateriaPrima();

  constructor(
    private service: ComponenteMateriaPrimasService
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
