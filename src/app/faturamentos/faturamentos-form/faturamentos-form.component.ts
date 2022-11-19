import { Component, OnInit } from '@angular/core';

import { Faturamento } from '../faturamento';
import { FaturamentosService } from '../../services/faturamentos.service';

@Component({
  selector: 'app-faturamentos-form',
  templateUrl: './faturamentos-form.component.html',
  styleUrls: ['./faturamentos-form.component.css']
})
export class FaturamentosFormComponent implements OnInit {

  faturamento: Faturamento;

  constructor(
    private faturmentosService: FaturamentosService
  ) { 
    this.faturamento = new Faturamento();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
