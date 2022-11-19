import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartaoOp } from '../cartao-ops/cartao-op';

@Injectable({
  providedIn: 'root'
})
export class CartaoOpsService {

  constructor(
    private http : HttpClient
  ) { }
}
