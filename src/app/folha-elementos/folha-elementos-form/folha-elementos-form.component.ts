import { Component, OnInit } from '@angular/core';

import { FolhaElemento } from '../folha-elemento';
import { FolhaElementosService } from '../../services/folha-elementos.service';

@Component({
  selector: 'app-folha-elementos-form',
  templateUrl: './folha-elementos-form.component.html',
  styleUrls: ['./folha-elementos-form.component.css']
})
export class FolhaElementosFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: FolhaElemento = new FolhaElemento();

  constructor(
    private service: FolhaElementosService
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
