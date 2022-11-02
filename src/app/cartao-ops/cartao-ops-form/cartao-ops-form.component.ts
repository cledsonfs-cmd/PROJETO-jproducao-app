import { Component, OnInit } from '@angular/core';

import { CartaoOp } from '../cartao-op'

@Component({
  selector: 'app-cartao-ops-form',
  templateUrl: './cartao-ops-form.component.html',
  styleUrls: ['./cartao-ops-form.component.css']
})
export class CartaoOpsFormComponent implements OnInit {

  cartaOp: CartaoOp;

  constructor() { 
    this.cartaOp = new CartaoOp();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
