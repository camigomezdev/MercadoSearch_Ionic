import { Component } from '@angular/core';
import { ListProductPage } from '../list-product/list-product'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  product:string = ""
  productList:any = ListProductPage

  constructor() {}



}
