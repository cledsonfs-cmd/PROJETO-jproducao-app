import { Component, OnInit } from '@angular/core';

import { Procedimento } from '../procedimento';
import { ProcedimentosService } from '../../services/procedimentos.service';

@Component({
  selector: 'app-procedimentos-form',
  templateUrl: './procedimentos-form.component.html',
  styleUrls: ['./procedimentos-form.component.css']
})
export class ProcedimentosFormComponent implements OnInit {
  objeto: Procedimento = new Procedimento();

  constructor(
    private procedimentosService: ProcedimentosService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
