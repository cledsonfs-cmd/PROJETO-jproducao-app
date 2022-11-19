import { Component, OnInit } from '@angular/core';

import { Componente } from '../componente';
import { ComponentesService } from '../../services/componentes.service';

@Component({
  selector: 'app-componentes-form',
  templateUrl: './componentes-form.component.html',
  styleUrls: ['./componentes-form.component.css']
})
export class ComponentesFormComponent implements OnInit {

  componente: Componente;

  constructor(
    private componentesService: ComponentesService
  ) { 
    this.componente = new Componente();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
