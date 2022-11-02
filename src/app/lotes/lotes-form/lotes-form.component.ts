import { Component, OnInit } from '@angular/core';

import { Lote } from '../lote'

@Component({
  selector: 'app-lotes-form',
  templateUrl: './lotes-form.component.html',
  styleUrls: ['./lotes-form.component.css']
})
export class LotesFormComponent implements OnInit {

  lote: Lote;

  constructor() { 
    this.lote = new Lote();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
