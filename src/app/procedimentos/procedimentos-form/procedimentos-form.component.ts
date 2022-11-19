import { Component, OnInit } from '@angular/core';

import { Procedimento } from '../procedimento';
import { ProcedimentosService } from '../../services/procedimentos.service';

@Component({
  selector: 'app-procedimentos-form',
  templateUrl: './procedimentos-form.component.html',
  styleUrls: ['./procedimentos-form.component.css']
})
export class ProcedimentosFormComponent implements OnInit {
  procedimento: Procedimento;

  constructor(
    private procedimentosService: ProcedimentosService
  ) { 
    this.procedimento = new Procedimento();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
