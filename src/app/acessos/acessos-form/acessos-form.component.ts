import { Component, OnInit } from '@angular/core';

import { Acesso } from '../acesso'

@Component({
  selector: 'app-acessos-form',
  templateUrl: './acessos-form.component.html',
  styleUrls: ['./acessos-form.component.css']
})
export class AcessosFormComponent implements OnInit {

  acesso: Acesso;

  constructor() { 
    this.acesso = new Acesso();
  }

  ngOnInit(): void {
  }

}
