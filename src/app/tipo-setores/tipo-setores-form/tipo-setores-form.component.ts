import { Component, OnInit } from '@angular/core';

import { TipoSetor } from '../tipo-setor';
import { TipoSetoresService } from '../../services/tipo-setores.service';

@Component({
  selector: 'app-tipo-setores-form',
  templateUrl: './tipo-setores-form.component.html',
  styleUrls: ['./tipo-setores-form.component.css']
})
export class TipoSetoresFormComponent implements OnInit {
  objeto:TipoSetor = new TipoSetor();

  constructor(
    private tipoSetoresService: TipoSetoresService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
