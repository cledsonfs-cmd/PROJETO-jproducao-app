import { Component, OnInit } from '@angular/core';

import { Embalagem } from '../embalagem';
import { EmbalagensService } from '../../services/embalagens.service';

@Component({
  selector: 'app-embalagens-form',
  templateUrl: './embalagens-form.component.html',
  styleUrls: ['./embalagens-form.component.css']
})
export class EmbalagensFormComponent implements OnInit {

  embalagem: Embalagem;

  constructor(
    private embalagensService: EmbalagensService
  ) { 
    this.embalagem = new Embalagem();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
