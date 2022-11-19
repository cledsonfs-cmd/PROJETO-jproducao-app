import { Component, OnInit } from '@angular/core';

import { Pop } from '../pop';
import { PopsService } from '../../services/pops.service';

@Component({
  selector: 'app-pops-form',
  templateUrl: './pops-form.component.html',
  styleUrls: ['./pops-form.component.css']
})
export class PopsFormComponent implements OnInit {

  objeto: Pop = new Pop();

  constructor(
    private popsService: PopsService
  ) {
    
   }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
