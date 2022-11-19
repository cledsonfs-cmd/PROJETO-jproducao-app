import { Component, OnInit } from '@angular/core';

import { ConsumoSetor } from '../consumo-setor';
import { ConsumoSetoresService } from '../../services/consumo-setores.service';

@Component({
  selector: 'app-consumo-setores-form',
  templateUrl: './consumo-setores-form.component.html',
  styleUrls: ['./consumo-setores-form.component.css']
})
export class ConsumoSetoresFormComponent implements OnInit {

  consumoSetor: ConsumoSetor;

  constructor(
    private consumoSetoresService: ConsumoSetoresService
  ) { 
    this.consumoSetor = new ConsumoSetor();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
