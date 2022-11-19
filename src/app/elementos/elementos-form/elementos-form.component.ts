import { Component, OnInit } from '@angular/core';

import { Elemento } from '../elemento';
import { ElementosService } from '../../services/elementos.service';

@Component({
  selector: 'app-elementos-form',
  templateUrl: './elementos-form.component.html',
  styleUrls: ['./elementos-form.component.css']
})
export class ElementosFormComponent implements OnInit {

  objeto: Elemento = new Elemento();

  constructor(
    private elementosService: ElementosService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
