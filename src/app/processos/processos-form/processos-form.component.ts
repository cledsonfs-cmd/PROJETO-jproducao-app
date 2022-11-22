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

  constructor(
    private service: ProcessosService,
    private empresasService: EmpresasService,
    private setoresService: SetoresService
  ) { 
    
  }

  ngOnInit(): void {
    this.empresasService.getAll().subscribe( resposta => this.empresas = resposta);
    this.setoresService.getAll().subscribe( resposta => this.setores = resposta);
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

  selecionarEmpresa(id: number):void{
    this.empresas.forEach(element => {
      if(element.id == id){
        this.objeto.empresa = element;
      }
    });   
  }

  selecionarSetor(id: number):void{
    this.setores.forEach(element => {
      if(element.id == id){
        this.objeto.setor = element;
      }
    });   
  }
}
