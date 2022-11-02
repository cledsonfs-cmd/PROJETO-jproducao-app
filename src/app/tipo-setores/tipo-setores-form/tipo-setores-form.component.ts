import { Component, OnInit } from '@angular/core';

import { TipoSetor } from '../tipo-setor'

@Component({
  selector: 'app-tipo-setores-form',
  templateUrl: './tipo-setores-form.component.html',
  styleUrls: ['./tipo-setores-form.component.css']
})
export class TipoSetoresFormComponent implements OnInit {
  tipoSetor:TipoSetor;

  constructor() { 
    this.tipoSetor = new TipoSetor();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
