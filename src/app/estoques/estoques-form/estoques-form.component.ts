import { Component, OnInit } from '@angular/core';

import { Estoque } from '../estoque'

@Component({
  selector: 'app-estoques-form',
  templateUrl: './estoques-form.component.html',
  styleUrls: ['./estoques-form.component.css']
})
export class EstoquesFormComponent implements OnInit {

  estoque: Estoque;

  constructor() { 
    this.estoque = new Estoque();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
