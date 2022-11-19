import { Component, OnInit } from '@angular/core';

import { MateriaPrima } from '../materia-prima';
import { MateriaPrimasService } from '../../services/materia-primas.service';

@Component({
  selector: 'app-materia-primas-form',
  templateUrl: './materia-primas-form.component.html',
  styleUrls: ['./materia-primas-form.component.css']
})
export class MateriaPrimasFormComponent implements OnInit {

  objeto: MateriaPrima = new MateriaPrima();

  constructor(
    private materiaPrimasService: MateriaPrimasService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
