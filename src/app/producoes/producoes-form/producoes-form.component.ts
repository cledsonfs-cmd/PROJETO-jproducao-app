import { Component, OnInit } from '@angular/core';

import { Producao } from '../producao';
import { ProducoesService } from '../../services/producoes.service';

@Component({
  selector: 'app-producoes-form',
  templateUrl: './producoes-form.component.html',
  styleUrls: ['./producoes-form.component.css']
})
export class ProducoesFormComponent implements OnInit {
  objeto: Producao = new Producao();

  constructor(
    private producoesService: ProducoesService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
