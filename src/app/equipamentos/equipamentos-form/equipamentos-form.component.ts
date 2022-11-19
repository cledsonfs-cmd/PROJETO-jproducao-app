import { Component, OnInit } from '@angular/core';

import { Equipamento } from '../equipamento';
import { EquipamentosService } from '../../services/equipamentos.service';

@Component({
  selector: 'app-equipamentos-form',
  templateUrl: './equipamentos-form.component.html',
  styleUrls: ['./equipamentos-form.component.css']
})
export class EquipamentosFormComponent implements OnInit {

  equipamento: Equipamento;

  constructor(
    private equipamentosServices: EquipamentosService
  ) { 
    this.equipamento = new Equipamento();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
