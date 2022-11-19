import { Component, OnInit } from '@angular/core';

import { ConsumoSetor } from '../consumo-setor';
import { ConsumoSetoresService } from '../../services/consumo-setores.service';

@Component({
  selector: 'app-consumo-setores-form',
  templateUrl: './consumo-setores-form.component.html',
  styleUrls: ['./consumo-setores-form.component.css']
})
export class ConsumoSetoresFormComponent implements OnInit {

  objeto: ConsumoSetor = new ConsumoSetor();

  constructor(
    private consumoSetoresService: ConsumoSetoresService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
