import { Component, OnInit } from '@angular/core';

import { Log } from '../log'

@Component({
  selector: 'app-logs-form',
  templateUrl: './logs-form.component.html',
  styleUrls: ['./logs-form.component.css']
})
export class LogsFormComponent implements OnInit {

  log: Log;

  constructor() {
    this.log = new Log();
   }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
