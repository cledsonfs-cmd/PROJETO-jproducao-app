import { Component, OnInit } from '@angular/core';

import { ConsumoSetor } from '../consumo-setor';
import { ConsumoSetoresService } from '../../services/consumo-setores.service';

@Component({
  selector: 'app-consumo-setores-form',
  templateUrl: './consumo-setores-form.component.html',
  styleUrls: ['./consumo-setores-form.component.css']
})
export class ConsumoSetoresFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: ConsumoSetor = new ConsumoSetor();

  constructor(
    private service: ConsumoSetoresService
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
