import { Component, OnInit } from '@angular/core';

import { SubProcesso } from '../sub-processo'

@Component({
  selector: 'app-sub-processos-form',
  templateUrl: './sub-processos-form.component.html',
  styleUrls: ['./sub-processos-form.component.css']
})
export class SubProcessosFormComponent implements OnInit {
  subProcesso: SubProcesso;

  constructor() { 
    this.subProcesso = new SubProcesso();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
