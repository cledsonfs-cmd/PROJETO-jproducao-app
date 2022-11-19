import { Component, OnInit } from '@angular/core';

import { Evento } from '../evento';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.css']
})
export class EventosFormComponent implements OnInit {

  objeto: Evento = new Evento();

  constructor(
    private eventesService: EventosService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
