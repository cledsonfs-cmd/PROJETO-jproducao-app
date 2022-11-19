import { Component, OnInit } from '@angular/core';

import { Perfil } from '../perfil';
import { PerfisService } from '../../services/perfis.service';

@Component({
  selector: 'app-perfis-form',
  templateUrl: './perfis-form.component.html',
  styleUrls: ['./perfis-form.component.css']
})
export class PerfisFormComponent implements OnInit {

  perfil: Perfil;

  constructor(
    private perfisService: PerfisService
  ) { 
    this.perfil = new Perfil();
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
