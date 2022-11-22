import { Component, OnInit } from '@angular/core';
import { Setor } from 'src/app/setores/setor';


import { SetoresService } from '../../services/setores.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  setores: Setor[] = [];

  constructor(
    private setoresService: SetoresService
  ) { }

  ngOnInit(): void {
    this.setoresService.getAll().subscribe( resposta => this.setores = resposta);
  }

}
