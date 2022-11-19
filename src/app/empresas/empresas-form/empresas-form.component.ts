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

  objeto: Empresa = new Empresa();
  cep: Cep = new Cep();

  constructor(
    private empresasService: EmpresasService,
    private toolsService: ToolsService
  ) { 
    
  }

  ngOnInit(): void {
    this.formataCodigo();
  }

  onSubmit(){
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
    if(this.objeto.codigoEmpresa == null ||  this.objeto.codigoEmpresa.length == 0){
      this.objeto.codigoEmpresa = "E"+String(this.objeto.id).padStart(7, '0');
    }    
  }

}
