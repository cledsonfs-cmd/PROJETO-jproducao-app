import { Component, OnInit } from '@angular/core';

import { Processo } from '../processo';
import { ProcessosService } from '../../services/processos.service';

@Component({
  selector: 'app-processos-form',
  templateUrl: './processos-form.component.html',
  styleUrls: ['./processos-form.component.css']
})
export class ProcessosFormComponent implements OnInit {
  processo: Processo;

  constructor(
    private processosService: ProcessosService
  ) { 
    this.processo = new Processo();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
