import { Component, OnInit } from '@angular/core';

import { MateriaPrima } from '../materia-prima';
import { MateriaPrimasService } from '../../services/materia-primas.service';

@Component({
  selector: 'app-materia-primas-form',
  templateUrl: './materia-primas-form.component.html',
  styleUrls: ['./materia-primas-form.component.css']
})
export class MateriaPrimasFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: MateriaPrima = new MateriaPrima();

  constructor(
    private service: MateriaPrimasService
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
