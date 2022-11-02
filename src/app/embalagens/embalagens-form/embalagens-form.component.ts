import { Component, OnInit } from '@angular/core';

import { Embalagem } from '../embalagem'

@Component({
  selector: 'app-embalagens-form',
  templateUrl: './embalagens-form.component.html',
  styleUrls: ['./embalagens-form.component.css']
})
export class EmbalagensFormComponent implements OnInit {

  embalagem: Embalagem;

  constructor() { 
    this.embalagem = new Embalagem();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
