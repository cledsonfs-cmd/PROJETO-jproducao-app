import { Component, OnInit } from '@angular/core';

import { Empresa } from '../empresa'

@Component({
  selector: 'app-empresas-form',
  templateUrl: './empresas-form.component.html',
  styleUrls: ['./empresas-form.component.css']
})
export class EmpresasFormComponent implements OnInit {

  empresa: Empresa;

  constructor() { 
    this.empresa = new Empresa();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
