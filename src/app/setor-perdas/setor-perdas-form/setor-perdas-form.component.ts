import { Component, OnInit } from '@angular/core';

import { setorPerda } from '../setor-perda'

@Component({
  selector: 'app-setor-perdas-form',
  templateUrl: './setor-perdas-form.component.html',
  styleUrls: ['./setor-perdas-form.component.css']
})
export class SetorPerdasFormComponent implements OnInit {
  setorPerda: setorPerda;

  constructor() { 
    this.setorPerda = new setorPerda();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
