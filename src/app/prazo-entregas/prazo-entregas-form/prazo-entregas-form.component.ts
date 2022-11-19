import { Component, OnInit } from '@angular/core';

import { PrazoEntrega } from '../prazo-entrega';
import { PrazoEntregasService } from '../../services/prazo-entregas.service';

@Component({
  selector: 'app-prazo-entregas-form',
  templateUrl: './prazo-entregas-form.component.html',
  styleUrls: ['./prazo-entregas-form.component.css']
})
export class PrazoEntregasFormComponent implements OnInit {
  prazoEntrega: PrazoEntrega;

  constructor(
    private prazoEntregasServices: PrazoEntregasService
  ) { 
    this.prazoEntrega = new PrazoEntrega();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
