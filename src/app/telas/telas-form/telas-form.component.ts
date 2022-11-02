import { Component, OnInit } from '@angular/core';

import { Tela } from '../tela'

@Component({
  selector: 'app-telas-form',
  templateUrl: './telas-form.component.html',
  styleUrls: ['./telas-form.component.css']
})
export class TelasFormComponent implements OnInit {
  tela: Tela;

  constructor() {
    this.tela = new Tela();
   }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
