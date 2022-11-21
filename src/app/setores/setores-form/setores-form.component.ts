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
  success: boolean = false;
  errros: String[] = [];
  objeto: Setor = new Setor();
  empresaSel: Empresa = new Empresa();
  tipoSetorSel: TipoSetor = new TipoSetor();
  empresas: Empresa[] = [];
  tipoSetores: TipoSetor[] = [];

  constructor(
    private service: SetoresService,
    private empresasService: EmpresasService,
    private tipoSetoresService: TipoSetoresService
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
  },
      errorResponse => { this.errros = errorResponse.errros;
      this.success = false;        
    });
    this.success = true;
  }
  }

  selecionarEmpresa(id: number):void{
    this.empresasService.get(id).subscribe( resposta => this.empresaSel = resposta);
    this.objeto.empresa = this.empresaSel;
  }

  selecionarTipoSetor(id: number):void{
    this.tipoSetoresService.get(id).subscribe( resposta => this.tipoSetorSel = resposta);
    this.objeto.tipoSetor = this.tipoSetorSel;
  }

  formataCodigo():void{
    if(this.objeto.codigo == null ||  this.objeto.codigo.length == 0){
      this.objeto.codigo = "S"+String(this.objeto.id).padStart(3, '0');
    }    
  }

}
