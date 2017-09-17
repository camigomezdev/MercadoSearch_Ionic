import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

  producto: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto = this.navParams.get('producto');
  }

  regresar(){
    this.navCtrl.pop();
  }

}
