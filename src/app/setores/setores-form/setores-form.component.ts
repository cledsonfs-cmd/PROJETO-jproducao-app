import { Component, OnInit } from '@angular/core';

import { Setor } from '../setor'

@Component({
  selector: 'app-setores-form',
  templateUrl: './setores-form.component.html',
  styleUrls: ['./setores-form.component.css']
})
export class SetoresFormComponent implements OnInit {

  setor: Setor;

  constructor() {
    this.setor = new Setor();
   }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
