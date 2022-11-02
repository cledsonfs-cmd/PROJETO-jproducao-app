import { Component, OnInit } from '@angular/core';

import { MateriaPrima } from '../materia-prima'

@Component({
  selector: 'app-materia-primas-form',
  templateUrl: './materia-primas-form.component.html',
  styleUrls: ['./materia-primas-form.component.css']
})
export class MateriaPrimasFormComponent implements OnInit {

  materiaPrima: MateriaPrima;

  constructor() { 
    this.materiaPrima = new MateriaPrima();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
