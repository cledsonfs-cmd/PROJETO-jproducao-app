import { Component, OnInit } from '@angular/core';

import { SetorPerda } from '../setor-perda';
import { SetorPerdasService } from '../../services/setor-perdas.service';

@Component({
  selector: 'app-setor-perdas-form',
  templateUrl: './setor-perdas-form.component.html',
  styleUrls: ['./setor-perdas-form.component.css']
})
export class SetorPerdasFormComponent implements OnInit {
  objeto: SetorPerda = new SetorPerda();

  constructor(
    private setorPerdasService: SetorPerdasService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
