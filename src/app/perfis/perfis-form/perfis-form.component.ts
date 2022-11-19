import { Component, OnInit } from '@angular/core';

import { Perfil } from '../perfil';
import { PerfisService } from '../../services/perfis.service';

@Component({
  selector: 'app-perfis-form',
  templateUrl: './perfis-form.component.html',
  styleUrls: ['./perfis-form.component.css']
})
export class PerfisFormComponent implements OnInit {

  objeto: Perfil = new Perfil();

  constructor(
    private perfisService: PerfisService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
