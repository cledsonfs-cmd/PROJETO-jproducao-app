import { Component, OnInit } from '@angular/core';

import { Setor } from '../setor';
import { SetoresService } from '../../services/setores.service';

@Component({
  selector: 'app-setores-form',
  templateUrl: './setores-form.component.html',
  styleUrls: ['./setores-form.component.css']
})
export class SetoresFormComponent implements OnInit {

  setor: Setor;

  constructor(
    private setoresService: SetoresService
  ) {
    this.setor = new Setor();
   }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
