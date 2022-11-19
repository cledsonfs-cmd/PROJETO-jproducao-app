import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {
  objeto: Produto = new Produto();

  constructor(
    private produtosService: ProdutosService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
