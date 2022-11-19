import { Component, OnInit } from '@angular/core';

import { Unidade } from '../unidade';
import { UnidadesService } from '../../services/unidades.service';

@Component({
  selector: 'app-unidades-form',
  templateUrl: './unidades-form.component.html',
  styleUrls: ['./unidades-form.component.css']
})
export class UnidadesFormComponent implements OnInit {
  objeto: Unidade = new Unidade();

  constructor(
    private unidadesServices: UnidadesService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
