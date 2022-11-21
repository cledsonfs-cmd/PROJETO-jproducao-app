import { Component, OnInit } from '@angular/core';

import { SubSetor } from '../sub-setor';
import { SubSetoresService } from '../../services/sub-setores.service';

@Component({
  selector: 'app-sub-setores-form',
  templateUrl: './sub-setores-form.component.html',
  styleUrls: ['./sub-setores-form.component.css']
})
export class SubSetoresFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: SubSetor = new SubSetor();

  constructor(
    private service: SubSetoresService
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
