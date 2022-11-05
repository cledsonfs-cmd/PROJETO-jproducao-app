import { Component, OnInit } from '@angular/core';

import { SetorPerda } from '../setor-perda'

@Component({
  selector: 'app-setor-perdas-form',
  templateUrl: './setor-perdas-form.component.html',
  styleUrls: ['./setor-perdas-form.component.css']
})
export class SetorPerdasFormComponent implements OnInit {
  setorPerda: SetorPerda;

  constructor() { 
    this.setorPerda = new SetorPerda();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
