import { Component, OnInit } from '@angular/core';

import { CartaoOp } from '../cartao-op';
import { CartaoOpsService } from '../../services/cartao-ops.service';

@Component({
  selector: 'app-cartao-ops-form',
  templateUrl: './cartao-ops-form.component.html',
  styleUrls: ['./cartao-ops-form.component.css']
})
export class CartaoOpsFormComponent implements OnInit {

  objeto: CartaoOp = new CartaoOp();

  constructor(
    private cartaoOpsService: CartaoOpsService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
