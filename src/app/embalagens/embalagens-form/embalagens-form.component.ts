import { Component, OnInit } from '@angular/core';

import { Embalagem } from '../embalagem';
import { EmbalagensService } from '../../services/embalagens.service';

@Component({
  selector: 'app-embalagens-form',
  templateUrl: './embalagens-form.component.html',
  styleUrls: ['./embalagens-form.component.css']
})
export class EmbalagensFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Embalagem = new Embalagem();

  constructor(
    private service: EmbalagensService
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
