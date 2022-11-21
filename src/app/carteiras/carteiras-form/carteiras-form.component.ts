import { Component, OnInit } from '@angular/core';

import { Carteira } from '../carteira';
import { CarteirasService } from '../../services/carteiras.service';

@Component({
  selector: 'app-carteiras-form',
  templateUrl: './carteiras-form.component.html',
  styleUrls: ['./carteiras-form.component.css']
})
export class CarteirasFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Carteira = new Carteira();

  constructor(
    private service: CarteirasService
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
