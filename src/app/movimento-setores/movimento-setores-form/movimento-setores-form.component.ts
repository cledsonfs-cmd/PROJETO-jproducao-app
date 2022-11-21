import { Component, OnInit } from '@angular/core';

import { MovimentoSetor } from '../movimento-setor';
import { MovimentoSetoresService } from '../../services/movimento-setores.service';

@Component({
  selector: 'app-movimento-setores-form',
  templateUrl: './movimento-setores-form.component.html',
  styleUrls: ['./movimento-setores-form.component.css']
})
export class MovimentoSetoresFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: MovimentoSetor = new MovimentoSetor();

  constructor(
    private service: MovimentoSetoresService
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
