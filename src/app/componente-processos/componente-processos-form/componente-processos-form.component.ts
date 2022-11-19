import { Component, OnInit } from '@angular/core';

import { ComponenteProcesso } from '../componente-processo';
import { ComponenteProcessosService } from '../../services/componente-processos.service';

@Component({
  selector: 'app-componente-processos-form',
  templateUrl: './componente-processos-form.component.html',
  styleUrls: ['./componente-processos-form.component.css']
})
export class ComponenteProcessosFormComponent implements OnInit {

  objeto: ComponenteProcesso = new ComponenteProcesso();

  constructor(
    private componenteProcessosService: ComponenteProcessosService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
