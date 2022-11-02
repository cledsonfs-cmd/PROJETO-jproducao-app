import { Component, OnInit } from '@angular/core';

import { Carteira } from '../carteira'

@Component({
  selector: 'app-carteiras-form',
  templateUrl: './carteiras-form.component.html',
  styleUrls: ['./carteiras-form.component.css']
})
export class CarteirasFormComponent implements OnInit {

  carteira: Carteira;

  constructor() { 
    this.carteira = new Carteira();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
