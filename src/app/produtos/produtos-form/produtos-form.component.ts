import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {
  produto: Produto;

  constructor(
    private produtosService: ProdutosService
  ) { 
    this.produto = new Produto;
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
