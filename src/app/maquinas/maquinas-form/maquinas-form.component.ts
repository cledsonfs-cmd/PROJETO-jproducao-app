import { Component, OnInit } from '@angular/core';

import { Maquina } from '../maquina';
import { MaquinasService } from '../../services/maquinas.service';
import { Setor } from 'src/app/setores/setor';
import { SetoresService } from 'src/app/services/setores.service';

@Component({
  selector: 'app-maquinas-form',
  templateUrl: './maquinas-form.component.html',
  styleUrls: ['./maquinas-form.component.css']
})
export class MaquinasFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Maquina = new Maquina();
  setorSel: Setor = new Setor();

  setores: Setor[] = [];

  constructor(
    private service: MaquinasService,
    private setoresService: SetoresService
  ) { 
    this.setoresService.getAll().subscribe( resposta => this.setores = resposta);
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
