import { Component, OnInit } from '@angular/core';

import { ComponenteMateriaPrima } from '../componente-materia-prima';
import { ComponenteMateriaPrimasService } from '../../services/componente-materia-primas.service';

@Component({
  selector: 'app-componente-materia-primas-form',
  templateUrl: './componente-materia-primas-form.component.html',
  styleUrls: ['./componente-materia-primas-form.component.css']
})
export class ComponenteMateriaPrimasFormComponent implements OnInit {

  componenteMateriaPrima: ComponenteMateriaPrima;

  constructor(
    private componenteMateriaPrimasService: ComponenteMateriaPrimasService
  ) { 
    this.componenteMateriaPrima = new ComponenteMateriaPrima();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
