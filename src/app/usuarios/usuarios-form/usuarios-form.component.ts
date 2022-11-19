import { Component, OnInit } from '@angular/core';

import { Usuario } from '../usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {
  usuario: Usuario;

  constructor(
    private usuariosservice: UsuariosService
  ) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
