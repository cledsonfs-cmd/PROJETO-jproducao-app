import { Component, OnInit } from '@angular/core';

import { Perfil } from '../perfil'

@Component({
  selector: 'app-perfis-form',
  templateUrl: './perfis-form.component.html',
  styleUrls: ['./perfis-form.component.css']
})
export class PerfisFormComponent implements OnInit {

  perfil: Perfil;

  constructor() { 
    this.perfil = new Perfil();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
