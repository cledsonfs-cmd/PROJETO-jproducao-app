import { Component, OnInit } from '@angular/core';

import { Maquina } from '../maquina';
import { MaquinasService } from '../../services/maquinas.service';

@Component({
  selector: 'app-maquinas-form',
  templateUrl: './maquinas-form.component.html',
  styleUrls: ['./maquinas-form.component.css']
})
export class MaquinasFormComponent implements OnInit {

  objeto: Maquina = new Maquina();

  constructor(
    private maquinasService: MaquinasService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
