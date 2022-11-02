import { Component, OnInit } from '@angular/core';

import { ComponenteProcesso } from '../componente-processo'

@Component({
  selector: 'app-componente-processos-form',
  templateUrl: './componente-processos-form.component.html',
  styleUrls: ['./componente-processos-form.component.css']
})
export class ComponenteProcessosFormComponent implements OnInit {

  componenteProcesso: ComponenteProcesso;

  constructor() { 
    this.componenteProcesso = new ComponenteProcesso();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
