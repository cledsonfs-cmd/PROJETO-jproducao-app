import { Component, OnInit } from '@angular/core';

import { Usuario } from '../usuario'

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {
  usuario: Usuario;

  constructor() { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
