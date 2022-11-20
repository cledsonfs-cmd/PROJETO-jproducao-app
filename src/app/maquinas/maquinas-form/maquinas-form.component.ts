import { Component, OnInit } from '@angular/core';

import { Maquina } from '../maquina';
import { MaquinasService } from '../../services/maquinas.service';
import { Setor } from 'src/app/setores/setor';
import { SetoresService } from 'src/app/services/setores.service';

@Component({
  selector: 'app-maquinas-form',
  templateUrl: './maquinas-form.component.html',
  styleUrls: ['./maquinas-form.component.css']
})
export class MaquinasFormComponent implements OnInit {

  objeto: Maquina = new Maquina();
  setorSel: Setor = new Setor();

  setores: Setor[] = [];

  constructor(
    private maquinasService: MaquinasService,
    private setoresService: SetoresService
  ) { 
    this.setoresService.getAll().subscribe( resposta => this.setores = resposta);
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

  selecionarSetor(id: number):void{
    this.setoresService.get(id).subscribe( resposta => this.setorSel = resposta);
    this.objeto.setor = this.setorSel;
  }

}
