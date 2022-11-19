import { Component, OnInit } from '@angular/core';

import { Carteira } from '../carteira';
import { CarteirasService } from '../../services/carteiras.service';

@Component({
  selector: 'app-carteiras-form',
  templateUrl: './carteiras-form.component.html',
  styleUrls: ['./carteiras-form.component.css']
})
export class CarteirasFormComponent implements OnInit {

  objeto: Carteira = new Carteira();

  constructor(
    private carteirasService: CarteirasService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
