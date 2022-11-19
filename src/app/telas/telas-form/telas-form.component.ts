import { Component, OnInit } from '@angular/core';

import { Tela } from '../tela';
import { TelasService } from '../../services/telas.service';

@Component({
  selector: 'app-telas-form',
  templateUrl: './telas-form.component.html',
  styleUrls: ['./telas-form.component.css']
})
export class TelasFormComponent implements OnInit {
  objeto: Tela = new Tela();

  constructor(
    private telasService: TelasService
  ) {
    
   }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
