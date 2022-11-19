import { Component, OnInit } from '@angular/core';

import { ElementoTempo } from '../elemento-tempo';
import { ElementoTemposService } from '../../services/elemento-tempos.service';

@Component({
  selector: 'app-elemento-tempos-form',
  templateUrl: './elemento-tempos-form.component.html',
  styleUrls: ['./elemento-tempos-form.component.css']
})
export class ElementoTemposFormComponent implements OnInit {

  objeto: ElementoTempo = new ElementoTempo();

  constructor(
    private elementoTemposService: ElementoTemposService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
