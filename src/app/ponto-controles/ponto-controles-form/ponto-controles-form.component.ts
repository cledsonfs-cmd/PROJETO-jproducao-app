import { Component, OnInit } from '@angular/core';

import { PontoControle } from '../ponto-controle';
import { PontoControlesService } from '../../services/ponto-controles.service';

@Component({
  selector: 'app-ponto-controles-form',
  templateUrl: './ponto-controles-form.component.html',
  styleUrls: ['./ponto-controles-form.component.css']
})
export class PontoControlesFormComponent implements OnInit {

  objeto: PontoControle = new PontoControle();

  constructor(
    private pontoControlesService: PontoControlesService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
