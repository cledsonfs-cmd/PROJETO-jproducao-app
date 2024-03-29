import { Component, OnInit } from '@angular/core';

import { ElementoTempo } from '../elemento-tempo';
import { ElementoTemposService } from '../../services/elemento-tempos.service';

@Component({
  selector: 'app-elemento-tempos-form',
  templateUrl: './elemento-tempos-form.component.html',
  styleUrls: ['./elemento-tempos-form.component.css']
})
export class ElementoTemposFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: ElementoTempo = new ElementoTempo();

  constructor(
    private service: ElementoTemposService
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
