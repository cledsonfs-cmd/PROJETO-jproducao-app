import { Component, OnInit } from '@angular/core';

import { CartaoOp } from '../cartao-op';
import { CartaoOpsService } from '../../services/cartao-ops.service';

@Component({
  selector: 'app-cartao-ops-form',
  templateUrl: './cartao-ops-form.component.html',
  styleUrls: ['./cartao-ops-form.component.css']
})
export class CartaoOpsFormComponent implements OnInit {

  cartaOp: CartaoOp;

  constructor(
    private cartaoOpsService: CartaoOpsService
  ) { 
    this.cartaOp = new CartaoOp();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
