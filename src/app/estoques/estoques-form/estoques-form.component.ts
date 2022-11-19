import { Component, OnInit } from '@angular/core';

import { Estoque } from '../estoque';
import { EstoquesService } from '../../services/estoques.service';

@Component({
  selector: 'app-estoques-form',
  templateUrl: './estoques-form.component.html',
  styleUrls: ['./estoques-form.component.css']
})
export class EstoquesFormComponent implements OnInit {

  objeto: Estoque = new Estoque();

  constructor(
    private estoquesService: EstoquesService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
