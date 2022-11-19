import { Component, OnInit } from '@angular/core';

import { Lote } from '../lote';
import { LotesService } from '../../services/lotes.service';

@Component({
  selector: 'app-lotes-form',
  templateUrl: './lotes-form.component.html',
  styleUrls: ['./lotes-form.component.css']
})
export class LotesFormComponent implements OnInit {

  lote: Lote;

  constructor(
    private lotesService: LotesService
  ) { 
    this.lote = new Lote();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
