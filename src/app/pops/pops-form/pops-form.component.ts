import { Component, OnInit } from '@angular/core';

import { Pop } from '../pop'

@Component({
  selector: 'app-pops-form',
  templateUrl: './pops-form.component.html',
  styleUrls: ['./pops-form.component.css']
})
export class PopsFormComponent implements OnInit {

  pop: Pop;

  constructor() {
    this.pop = new Pop();
   }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
