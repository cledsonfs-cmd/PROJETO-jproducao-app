import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
import { Unidade } from '../../unidades/unidade';
import { ProdutosService } from '../../services/produtos.service';
import { UnidadesService } from '../../services/unidades.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Produto = new Produto();  
  unidades: Unidade[] = [];

  constructor(
    private service: ProdutosService,
    private unidadeServide: UnidadesService
  ) { 
    
  }

  ngOnInit(): void {
    this.unidadeServide.getAll().subscribe( resposta => this.unidades = resposta);
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

  selecionarUnidade(id: number):void{
    this.unidades.forEach(element => {
      if(element.id == id){
        this.objeto.unidade = element;
      }
    }); 
  }

}
