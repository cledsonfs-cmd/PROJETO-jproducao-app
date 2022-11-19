import { Component, OnInit } from '@angular/core';

import { Equipamento } from '../equipamento';
import { EquipamentosService } from '../../services/equipamentos.service';

@Component({
  selector: 'app-equipamentos-form',
  templateUrl: './equipamentos-form.component.html',
  styleUrls: ['./equipamentos-form.component.css']
})
export class EquipamentosFormComponent implements OnInit {

  objeto: Equipamento = new Equipamento();

  constructor(
    private equipamentosServices: EquipamentosService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
