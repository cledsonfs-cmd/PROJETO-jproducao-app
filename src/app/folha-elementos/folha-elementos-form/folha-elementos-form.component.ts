import { Component, OnInit } from '@angular/core';

import { FolhaElemento } from '../folha-elemento'

@Component({
  selector: 'app-folha-elementos-form',
  templateUrl: './folha-elementos-form.component.html',
  styleUrls: ['./folha-elementos-form.component.css']
})
export class FolhaElementosFormComponent implements OnInit {

  folhaElemento: FolhaElemento;

  constructor() { 
    this.folhaElemento = new FolhaElemento();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
