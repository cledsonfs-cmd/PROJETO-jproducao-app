import { Component, OnInit } from '@angular/core';

import { ComponenteMateriaPrima } from '../componente-materia-prima'

@Component({
  selector: 'app-componente-materia-primas-form',
  templateUrl: './componente-materia-primas-form.component.html',
  styleUrls: ['./componente-materia-primas-form.component.css']
})
export class ComponenteMateriaPrimasFormComponent implements OnInit {

  componenteMateriaPrima: ComponenteMateriaPrima;

  constructor() { 
    this.componenteMateriaPrima = new ComponenteMateriaPrima();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
