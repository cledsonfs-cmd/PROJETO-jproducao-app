import { Component, OnInit } from '@angular/core';

import { Pop } from '../pop';
import { PopsService } from '../../services/pops.service';

@Component({
  selector: 'app-pops-form',
  templateUrl: './pops-form.component.html',
  styleUrls: ['./pops-form.component.css']
})
export class PopsFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Pop = new Pop();

  constructor(
    private service: PopsService
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
