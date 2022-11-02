import { Component, OnInit } from '@angular/core';

import { Elemento } from '../elemento'

@Component({
  selector: 'app-elementos-form',
  templateUrl: './elementos-form.component.html',
  styleUrls: ['./elementos-form.component.css']
})
export class ElementosFormComponent implements OnInit {

  elemento: Elemento;

  constructor() { 
    this.elemento = new Elemento();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
