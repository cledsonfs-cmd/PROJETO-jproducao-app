import { Component, OnInit } from '@angular/core';

import { SubSetor } from '../sub-setor';
import { SubSetoresService } from '../../services/sub-setores.service';

@Component({
  selector: 'app-sub-setores-form',
  templateUrl: './sub-setores-form.component.html',
  styleUrls: ['./sub-setores-form.component.css']
})
export class SubSetoresFormComponent implements OnInit {
  subSetor: SubSetor;

  constructor(
    private subSetoresService: SubSetoresService
  ) { 
    this.subSetor = new SubSetor();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
