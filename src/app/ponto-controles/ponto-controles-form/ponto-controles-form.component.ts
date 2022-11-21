import { Component, OnInit } from '@angular/core';

import { PontoControle } from '../ponto-controle';
import { PontoControlesService } from '../../services/ponto-controles.service';
import { Setor } from 'src/app/setores/setor';
import { SetoresService } from 'src/app/services/setores.service';

@Component({
  selector: 'app-ponto-controles-form',
  templateUrl: './ponto-controles-form.component.html',
  styleUrls: ['./ponto-controles-form.component.css']
})
export class PontoControlesFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: PontoControle = new PontoControle();
  setores: Setor[] = [];
  setorSel: Setor = new Setor();

  constructor(
    private service: PontoControlesService,
    private setoresService: SetoresService
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

  selecionarSetor(id: number):void{
    this.setoresService.get(id).subscribe( resposta => this.setorSel = resposta);
    this.objeto.setor = this.setorSel;
  }

}
