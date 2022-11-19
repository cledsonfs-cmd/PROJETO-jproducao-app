import { Component, OnInit } from '@angular/core';

import { Maquina } from '../maquina';
import { MaquinasService } from '../../services/maquinas.service';

@Component({
  selector: 'app-maquinas-form',
  templateUrl: './maquinas-form.component.html',
  styleUrls: ['./maquinas-form.component.css']
})
export class MaquinasFormComponent implements OnInit {

  maquina: Maquina;

  constructor(
    private maquinasService: MaquinasService
  ) { 
    this.maquina = new Maquina();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
