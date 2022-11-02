import { Component, OnInit } from '@angular/core';

import { PrazoEntrega } from '../prazo-entrega'

@Component({
  selector: 'app-prazo-entregas-form',
  templateUrl: './prazo-entregas-form.component.html',
  styleUrls: ['./prazo-entregas-form.component.css']
})
export class PrazoEntregasFormComponent implements OnInit {
  prazoEntrega: PrazoEntrega;

  constructor() { 
    this.prazoEntrega = new PrazoEntrega();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
