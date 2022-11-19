import { Component, OnInit } from '@angular/core';

import { Log } from '../log';
import { LogsService } from '../../services/logs.service';

@Component({
  selector: 'app-logs-form',
  templateUrl: './logs-form.component.html',
  styleUrls: ['./logs-form.component.css']
})
export class LogsFormComponent implements OnInit {

  log: Log;

  constructor(
    private logsService: LogsService
  ) {
    this.log = new Log();
   }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
