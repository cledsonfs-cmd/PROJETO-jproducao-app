import { Component, OnInit } from '@angular/core';

import { Almoxarifado } from '../almoxarifado'

@Component({
  selector: 'app-almoxarifados-form',
  templateUrl: './almoxarifados-form.component.html',
  styleUrls: ['./almoxarifados-form.component.css']
})
export class AlmoxarifadosFormComponent implements OnInit {

  almoxarifado: Almoxarifado;

  constructor() { 
    this.almoxarifado = new Almoxarifado();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
