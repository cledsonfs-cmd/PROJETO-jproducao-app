import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../menus/menu';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(
    private http : HttpClient
  ) { }
}
