import { Component, OnInit } from '@angular/core';

import { MotivoPerda } from '../motivo-perda';
import { MotivoPerdasService } from '../../services/motivo-perdas.service';

@Component({
  selector: 'app-motivo-perdas-form',
  templateUrl: './motivo-perdas-form.component.html',
  styleUrls: ['./motivo-perdas-form.component.css']
})
export class MotivoPerdasFormComponent implements OnInit {

  objeto: MotivoPerda = new MotivoPerda();

  constructor(
    private motivoPerdasService: MotivoPerdasService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
