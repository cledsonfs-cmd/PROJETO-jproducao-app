import { Component, OnInit } from '@angular/core';

import { Evento } from '../evento'

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.css']
})
export class EventosFormComponent implements OnInit {

  evento: Evento;

  constructor() { 
    this.evento = new Evento();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
