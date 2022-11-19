import { Component, OnInit } from '@angular/core';

import { FolhaElemento } from '../folha-elemento';
import { FolhaElementosService } from '../../services/folha-elementos.service';

@Component({
  selector: 'app-folha-elementos-form',
  templateUrl: './folha-elementos-form.component.html',
  styleUrls: ['./folha-elementos-form.component.css']
})
export class FolhaElementosFormComponent implements OnInit {

  folhaElemento: FolhaElemento;

  constructor(
    private folhaElementosService: FolhaElementosService
  ) { 
    this.folhaElemento = new FolhaElemento();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
