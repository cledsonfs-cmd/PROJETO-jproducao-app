import { Component, OnInit } from '@angular/core';

import { Representante } from '../representante';
import { RepresentantesService } from '../../services/representantes.service';

@Component({
  selector: 'app-representantes-form',
  templateUrl: './representantes-form.component.html',
  styleUrls: ['./representantes-form.component.css']
})
export class RepresentantesFormComponent implements OnInit {
  representante: Representante;

  constructor(
    private representantesService: RepresentantesService
  ) { 
    this.representante = new Representante;
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
