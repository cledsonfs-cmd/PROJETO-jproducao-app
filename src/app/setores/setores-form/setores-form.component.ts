import { Component, OnInit } from '@angular/core';

import { Setor } from '../setor';
import { SetoresService } from '../../services/setores.service';

@Component({
  selector: 'app-setores-form',
  templateUrl: './setores-form.component.html',
  styleUrls: ['./setores-form.component.css']
})
export class SetoresFormComponent implements OnInit {

  objeto: Setor = new Setor();

  constructor(
    private setoresService: SetoresService
  ) {
    
   }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
