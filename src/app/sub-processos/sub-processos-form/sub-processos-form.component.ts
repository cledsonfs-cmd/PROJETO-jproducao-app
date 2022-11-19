import { Component, OnInit } from '@angular/core';

import { SubProcesso } from '../sub-processo';
import { SubProcessosService } from '../../services/sub-processos.service';

@Component({
  selector: 'app-sub-processos-form',
  templateUrl: './sub-processos-form.component.html',
  styleUrls: ['./sub-processos-form.component.css']
})
export class SubProcessosFormComponent implements OnInit {
  subProcesso: SubProcesso;

  constructor(
    private subProcessosServices: SubProcessosService
  ) { 
    this.subProcesso = new SubProcesso();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
