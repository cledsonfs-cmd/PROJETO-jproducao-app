import { Component, OnInit } from '@angular/core';

import { TipoSetor } from '../tipo-setor';
import { TipoSetoresService } from '../../services/tipo-setores.service';

@Component({
  selector: 'app-tipo-setores-form',
  templateUrl: './tipo-setores-form.component.html',
  styleUrls: ['./tipo-setores-form.component.css']
})
export class TipoSetoresFormComponent implements OnInit {
  tipoSetor:TipoSetor;

  constructor(
    private tipoSetoresService: TipoSetoresService
  ) { 
    this.tipoSetor = new TipoSetor();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
