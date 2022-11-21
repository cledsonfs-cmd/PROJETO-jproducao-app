import { Component, OnInit } from '@angular/core';

import { Processo } from '../processo';
import { Empresa } from '../../empresas/empresa';
import { Setor } from '../../setores/setor';

import { ProcessosService } from '../../services/processos.service';
import { EmpresasService } from '../../services/empresas.service';
import { SetoresService } from '../../services/setores.service';


@Component({
  selector: 'app-processos-form',
  templateUrl: './processos-form.component.html',
  styleUrls: ['./processos-form.component.css']
})
export class ProcessosFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Processo = new Processo();
  empresas: Empresa[] = [];
  setores: Setor[] = [];
  setorSel: Setor = new Setor();
  empresaSel: Empresa = new Empresa();

  constructor(
    private service: ProcessosService,
    private empresasService: EmpresasService,
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

  selecionarEmpresa(id: number):void{
    this.empresasService.get(id).subscribe( resposta => this.empresaSel = resposta);
    this.objeto.empresa = this.empresaSel;
  }

}
