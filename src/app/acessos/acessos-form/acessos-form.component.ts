import { Component, OnInit } from '@angular/core';

import { Acesso } from '../acesso';
import { AcessosService } from '../../services/acessos.service';

@Component({
  selector: 'app-acessos-form',
  templateUrl: './acessos-form.component.html',
  styleUrls: ['./acessos-form.component.css']
})
export class AcessosFormComponent implements OnInit {

  acesso: Acesso;

  constructor(
    private acessosService: AcessosService
  ) { 
    this.acesso = new Acesso();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
