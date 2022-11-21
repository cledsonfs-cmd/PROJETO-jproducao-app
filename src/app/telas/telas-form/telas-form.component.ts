import { Component, OnInit } from '@angular/core';

import { Tela } from '../tela';
import { TelasService } from '../../services/telas.service';

@Component({
  selector: 'app-telas-form',
  templateUrl: './telas-form.component.html',
  styleUrls: ['./telas-form.component.css']
})
export class TelasFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Tela = new Tela();

  constructor(
    private service: TelasService
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
