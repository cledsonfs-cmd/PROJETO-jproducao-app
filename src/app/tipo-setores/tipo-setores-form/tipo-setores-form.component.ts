import { Component, OnInit } from '@angular/core';

import { TipoSetor } from '../tipo-setor';
import { TipoSetoresService } from '../../services/tipo-setores.service';

@Component({
  selector: 'app-tipo-setores-form',
  templateUrl: './tipo-setores-form.component.html',
  styleUrls: ['./tipo-setores-form.component.css']
})
export class TipoSetoresFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto:TipoSetor = new TipoSetor();

  constructor(
    private service: TipoSetoresService
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
