import { Component, OnInit } from '@angular/core';

import { Componente } from '../componente';
import { ComponentesService } from '../../services/componentes.service';

@Component({
  selector: 'app-componentes-form',
  templateUrl: './componentes-form.component.html',
  styleUrls: ['./componentes-form.component.css']
})
export class ComponentesFormComponent implements OnInit {

  objeto: Componente = new Componente();

  constructor(
    private componentesService: ComponentesService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
