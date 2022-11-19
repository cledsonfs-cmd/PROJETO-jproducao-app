import { Component, OnInit } from '@angular/core';

import { Log } from '../log';
import { LogsService } from '../../services/logs.service';

@Component({
  selector: 'app-logs-form',
  templateUrl: './logs-form.component.html',
  styleUrls: ['./logs-form.component.css']
})
export class LogsFormComponent implements OnInit {

  objeto: Log = new Log();

  constructor(
    private logsService: LogsService
  ) {
    
   }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
