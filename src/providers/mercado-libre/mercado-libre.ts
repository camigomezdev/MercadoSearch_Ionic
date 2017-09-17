import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MercadoLibreProvider {

  apiLink:any = "https://api.mercadolibre.com/sites/MCO/"

    constructor(public http: Http) {}

    buscarProducto(producto:string){
        return new Promise((resolve, reject)=> {
          var link:string = this.apiLink + "search?q=" + producto
          this.http.get(link).map(res=>res.json()).subscribe(
            (data) => {
              resolve(data)
            },
            (error) => {
              reject("Error: "+ error)
            })
    })}

}
