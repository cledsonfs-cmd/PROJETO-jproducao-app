import { Component, OnInit } from '@angular/core';

import { Representante } from '../representante';
import { RepresentantesService } from '../../services/representantes.service';

@Component({
  selector: 'app-representantes-form',
  templateUrl: './representantes-form.component.html',
  styleUrls: ['./representantes-form.component.css']
})
export class RepresentantesFormComponent implements OnInit {
  objeto: Representante = new Representante();

  constructor(
    private representantesService: RepresentantesService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
