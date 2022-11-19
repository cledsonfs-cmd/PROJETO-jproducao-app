import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
  objeto: Cliente = new Cliente();

  constructor(
    private clientesService: ClientesService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
