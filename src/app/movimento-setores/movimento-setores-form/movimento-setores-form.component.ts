import { Component, OnInit } from '@angular/core';

import { MovimentoSetor } from '../movimento-setor';
import { MovimentoSetoresService } from '../../services/movimento-setores.service';

@Component({
  selector: 'app-movimento-setores-form',
  templateUrl: './movimento-setores-form.component.html',
  styleUrls: ['./movimento-setores-form.component.css']
})
export class MovimentoSetoresFormComponent implements OnInit {
  movimentoSetor: MovimentoSetor;

  constructor(
    private movimentoSetoresServices: MovimentoSetoresService
  ) { 
    this.movimentoSetor = new MovimentoSetor();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
