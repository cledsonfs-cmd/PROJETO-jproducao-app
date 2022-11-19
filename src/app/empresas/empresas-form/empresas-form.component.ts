import { Component, OnInit } from '@angular/core';

import { Empresa } from '../empresa';
import { EmpresasService } from '../../services/empresas.service';

@Component({
  selector: 'app-empresas-form',
  templateUrl: './empresas-form.component.html',
  styleUrls: ['./empresas-form.component.css']
})
export class EmpresasFormComponent implements OnInit {

  empresa: Empresa;

  constructor(
    private empresasService: EmpresasService
  ) { 
    this.empresa = new Empresa();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
