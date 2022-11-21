import { Component, OnInit } from '@angular/core';

import { Empresa } from '../empresa';
import { EmpresasService } from '../../services/empresas.service';
import { ToolsService } from '../../services/tools.service';
import { Cep } from 'src/app/tools/cep';

@Component({
  selector: 'app-empresas-form',
  templateUrl: './empresas-form.component.html',
  styleUrls: ['./empresas-form.component.css']
})
export class EmpresasFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  codigoEmpresa: String = "";  
  objeto: Empresa = new Empresa();
  cep: Cep = new Cep();

  constructor(
    private service: EmpresasService,
    private toolsService: ToolsService
  ) { 
    
  }

  ngOnInit(): void {
    this.formataCodigo();
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
      this.formataCodigo();          
  },
      errorResponse => { this.errros = errorResponse.errros;
      this.success = false;        
    });
    this.success = true;
  }
  }

  localizarCep():void{
    if(this.objeto!=null && this.objeto.cep!=null && this.objeto.cep.length>7){
      this.toolsService.getCep(this.objeto.cep).subscribe( resposta => this.cep =resposta);   
      this.objeto.cep = this.cep.cep;  
      this.objeto.rua = this.cep.logradouro + ", Número:";
      this.objeto.bairro = this.cep.bairro;
      this.objeto.uf = this.cep.uf;
      this.objeto.municipio = this.cep.localidade;

    }    
  }

  formataCodigo():void{    
      this.codigoEmpresa = "E"+String(this.objeto.id).padStart(7, '0');    
  }

}
