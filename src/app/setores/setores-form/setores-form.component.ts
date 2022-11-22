import { Component, OnInit } from '@angular/core';

import { Setor } from '../setor';
import { Empresa } from '../../empresas/empresa';
import { TipoSetor } from '../../tipo-setores/tipo-setor';
import { EmpresasService } from '../../services/empresas.service';
import { SetoresService } from '../../services/setores.service';
import { TipoSetoresService } from '../../services/tipo-setores.service';

@Component({
  selector: 'app-setores-form',
  templateUrl: './setores-form.component.html',
  styleUrls: ['./setores-form.component.css']
})
export class SetoresFormComponent implements OnInit {
  id: number = 0;
  codigo:String = "";
  success: boolean = false;
  errros: String[] = [];
  objeto: Setor = new Setor();  
  empresas: Empresa[] = [];
  tipoSetores: TipoSetor[] = [];

  constructor(
    private service: SetoresService,
    private empresasService: EmpresasService,
    private tipoSetoresService: TipoSetoresService
  ) {
    
   }

  ngOnInit(): void {
    this.empresasService.getAll().subscribe( resposta => this.empresas = resposta);
    this.tipoSetoresService.getAll().subscribe( resposta => this.tipoSetores = resposta);
    this.formataCodigo();
  }

  onSubmit(){
    
    console.log(this.objeto.tipoSetor.id)
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

  selecionarTipoSetor(id: number):void{
    this.tipoSetores.forEach(element => {
      if(element.id == id){
        this.objeto.tipoSetor = element;
      }
    });   
  }

  formataCodigo():void{    
      this.codigo = "S"+String(this.objeto.id).padStart(3, '0');    
  }

}
